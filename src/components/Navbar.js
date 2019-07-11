import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import '../App.css';

const { Header } = Layout;

const Navbar = ({ page }) => {
  return (
    <Layout>
      <div className='logo' />
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={[page]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='1'>
            <Link to='./'>Page1 </Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='./page2'>Page2 </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
