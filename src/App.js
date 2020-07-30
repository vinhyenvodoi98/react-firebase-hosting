import React from 'react'

import { HashRouter as Router } from 'react-router-dom'

import './App.css'
const { query } = require('./helper')

function App() {
  const sendIssue = () => {
    const userId = 'Uc5f16687b8a205c697c0a5e5d751cbbc'
    const path = `/v1/users/${userId}`
    query(path)
  }
  return (
    <Router>
      <div className='App'>
        <button onClick={() => sendIssue()}>Send service token</button>
      </div>
    </Router>
  )
}

export default App
