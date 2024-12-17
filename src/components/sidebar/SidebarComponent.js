import React, { useState } from 'react'
import { Layout, Button as AntButton, theme } from 'antd';
import MenuListComponent from '../sidebar/MenuListComponent';
import ToggleThemeButtonComponent from '../sidebar/ToggleThemeButtonComponent';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logo from "../../Assets/Logo.svg";
import BusinessListComponent from '../business/BusinessListComponent';
import DashboardComponent from '../business/DashboardComponent';

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
          <AntButton 
            type="text" 
            className="toggle" 
            onClick={() => setCollapsed(!collapsed)}
            icon={ collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}/>
        </Sider>
        <Layout theme={ darkTheme ? 'dark' : 'light'}>
          <Header style={{padding:0, background:colorBgContainer}}>
          <DashboardComponent/>
          </Header>
          <div className="">
            <BusinessListComponent/>
          </div>
        </Layout>
      </Layout>
  )
}

export default SidebarComponent
