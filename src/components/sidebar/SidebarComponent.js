import React, { useEffect, useState } from 'react'
import { Layout, Button as AntButton, theme } from 'antd';
import MenuListComponent from '../sidebar/MenuListComponent';
import ToggleThemeButtonComponent from '../sidebar/ToggleThemeButtonComponent';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logo from "../../Assets/Logo.svg";
import NavbarComponent from '../web/NavbarComponent';
import ContactComponent from '../web/ContactComponent';

const { Header, Sider } = Layout;
const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
        <Layout>
        <Sider 
        collapsed={collapsed}
        collapsible
        trigger={null}
        className="sidebar"
        theme={ darkTheme ? 'dark' : 'light'}>
          <div className="logo">
            <img src={Logo} alt="Home" className="logo-icon"/>
          </div>
          <MenuListComponent darkTheme={darkTheme}/>
          <ToggleThemeButtonComponent darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        </Sider>
        <Layout theme={ darkTheme ? 'dark' : 'light'}>
          <Header style={{padding:0, background:colorBgContainer}}>
            <NavbarComponent/>
            <AntButton 
            type="text" 
            className="toggle" 
            onClick={() => setCollapsed(!collapsed)}
            icon={ collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}/>
          </Header>
          <div className="">
            <ContactComponent />
          </div>
        </Layout>
      </Layout>
  )
}

export default SidebarComponent
