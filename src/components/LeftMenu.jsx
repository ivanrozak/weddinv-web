import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Grid } from 'antd';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? 'horizontal' : 'inline'}>
      {/* <Menu.Item key='home'> */}
      {/* <a href=''>Home</a> */}
      {/* <Link style={{ textDecoration: 'none' }} to='/'>
          Home
        </Link> */}
      {/* </Menu.Item> */}
      {/* <SubMenu key='sub1' title={<span>Blogs</span>}>
        <MenuItemGroup title='Item 1'>
          <Menu.Item key='setting:1'>Option 1</Menu.Item>
          <Menu.Item key='setting:2'>Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title='Item 2'>
          <Menu.Item key='setting:3'>Option 3</Menu.Item>
          <Menu.Item key='setting:4'>Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu> */}
      <Menu.Item key='order'>
        <Link style={{ textDecoration: 'none' }} to='/order'>
          How To Order
        </Link>
      </Menu.Item>
      <Menu.Item key='themes'>
        <Link style={{ textDecoration: 'none' }} to='/themes'>
          Themes
        </Link>
      </Menu.Item>
      <Menu.Item key='pricing'>
        <Link style={{ textDecoration: 'none' }} to='/pricing'>
          Pricing
        </Link>
      </Menu.Item>
      <Menu.Item key='testimoni'>
        <Link style={{ textDecoration: 'none' }} to='/testimoni'>
          Testimoni
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
