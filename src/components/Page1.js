import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';
import '../App.css';

const { Content } = Layout;

class Page1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: props.web3
    };
  }

  render() {
    return (
      <div>
        <Navbar page={'1'} />
        <div className='section'>
          <Content>
            <h1>
              <strong>Page1</strong>
            </h1>
            <h2>Hello world</h2>
          </Content>
        </div>
      </div>
    );
  }
}

export default Page1;
