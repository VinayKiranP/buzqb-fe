import React, { useState } from 'react'
import { Layout, Button as AntButton, theme } from 'antd';
import MenuListComponent from '../sidebar/MenuListComponent';
// import ToggleThemeButtonComponent from '../sidebar/ToggleThemeButtonComponent';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import Logo from "../../Assets/Logo.svg";
import BusinessListComponent from '../business/BusinessListComponent';
import DashboardHeaderComponent from '../business/DashboardHeaderComponent';

const { Header, Sider } = Layout;
const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <div className="Dashboard">
        <Layout theme={ darkTheme ? 'dark' : 'light'}>
        <Sider 
        collapsed={collapsed}
        collapsible
        trigger={null}
        className="sidebar"
        theme={ darkTheme ? 'dark' : 'light'}>
          <div className="logo">
            <img src={Logo} alt="Home" className="logo-icon"/>
          </div>
          <AntButton 
            type="text" 
            className="toggle" 
            onClick={() => setCollapsed(!collapsed)}
            icon={ collapsed ? <DoubleRightOutlined/> : <DoubleLeftOutlined/>}/>
          
          <MenuListComponent darkTheme={darkTheme}/>
          {/* <ToggleThemeButtonComponent darkTheme={darkTheme} toggleTheme={toggleTheme}/> */}
        </Sider>
        <Layout>
          <Header style={{padding:0, background:colorBgContainer}}>
          <DashboardHeaderComponent/>
          </Header>
          <div className="">
            <BusinessListComponent/>
          </div>
        </Layout>
      </Layout>
      </div>
  )
}

export default SidebarComponent
