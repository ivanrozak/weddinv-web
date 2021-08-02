import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
// import RightMenu from './RightMenu';
import { Drawer, Button } from 'antd';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    current: 'mail',
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <nav className='menuBar'>
        <div className='container'>
          <div className='logo'>
            <Link style={{ textDecoration: 'none' }} to='/'>
              Koendang.in
            </Link>
          </div>
          <div className='menuCon'>
            <div className='leftMenu'>
              <LeftMenu />
            </div>
            {/* <div className='rightMenu'>
            <RightMenu />
          </div> */}
            <Button
              className='barsMenu'
              type='primary'
              onClick={this.showDrawer}
            >
              <span className='barsBtn'></span>
            </Button>
            <Drawer
              title='Menu'
              placement='right'
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <LeftMenu />
              {/* <RightMenu /> */}
            </Drawer>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
