const axios = require('axios')

const cryptoRandomString = require('crypto-random-string')
const forge = require('node-forge')

function getSignature(method, path, nonce, timestamp, apiSecret, body = {}) {
  let url = `${nonce}${timestamp}${method}${path}`
  if (Object.keys(body).length !== 0) {
    const orderedBody = {}
    Object.keys(body)
      .sort()
      .forEach(function (key) {
        orderedBody[key] = body[key]
      })
    const params = Object.entries(orderedBody)
      .map((e) => e.join('='))
      .join('&')
    url = `${nonce}${timestamp}${method}${path}?${params}`
  }
  var hmac = forge.hmac.create()
  hmac.start('sha512', apiSecret)
  hmac.update(url)
  var signature = forge.util.encode64(hmac.digest().data)
  return signature
}

async function query(path, method = 'GET') {
  const apiKey = process.env.REACT_APP_API_KEY
  const apiSecret = process.env.REACT_APP_API_SECRET
  const serverUrl = process.env.REACT_APP_SERVER_URL
  const url = serverUrl + path
  const timestamp = new Date().getTime().toString()
  const nonce = cryptoRandomString({ length: 8 })
  const signature = getSignature(method, path, nonce, timestamp, apiSecret)
  const headers = {
    'service-api-key': apiKey,
    timestamp,
    nonce,
    signature
  }
  try {
    console.log(url, method, headers)
    const res = await axios({
      url,
      method,
      headers
    })
    console.log(JSON.stringify(res.data))
    return res
  } catch (err) {
    console.log('query failed ', err)
  }
}

async function invoke(path, body, method = 'POST') {
  const apiKey = process.env.REACT_APP_API_KEY
  const apiSecret = process.env.REACT_APP_API_SECRET
  const serverUrl = process.env.REACT_APP_SERVER_URL
  const url = serverUrl + path
  const timestamp = new Date().getTime().toString()
  const nonce = cryptoRandomString({ length: 8 })
  const signature = getSignature(
    method,
    path,
    nonce,
    timestamp,
    apiSecret,
    body
  )
  const headers = {
    'service-api-key': apiKey,
    timestamp,
    nonce,
    signature,
    'Content-Type': 'application/json'
  }
  try {
    let res = await axios({
      url,
      method,
      headers,
      data: body
    })
    console.log(JSON.stringify(res.data))
  } catch (err) {
    console.log(err)
  }
}

module.exports = { query, invoke }
