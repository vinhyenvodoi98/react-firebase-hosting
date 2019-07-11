import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';
import '../App.css';

const { Content } = Layout;

class Page2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: props.web3
    };
  }

  render() {
    return (
      <div>
        <Navbar page={'2'} />
        <div className='section'>
          <Content>
            <h1>
              <strong>Page2</strong>
            </h1>
          </Content>
        </div>
      </div>
    );
  }
}

export default Page2;
