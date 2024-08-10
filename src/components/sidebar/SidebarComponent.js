import React, { useEffect, useState } from 'react'
import { Layout, Button as AntButton, theme } from 'antd';
import MenuListComponent from '../sidebar/MenuListComponent';
import ToggleThemeButtonComponent from '../sidebar/ToggleThemeButtonComponent';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Sider } = Layout;
const SidebarComponent = () => {

  const [collapsed, setCollapsed] = useState(false);
  const [ darkTheme, setDarkTheme ] = useState(true);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <div>
        <Layout>
        <Sider 
        collapsed={collapsed}
        collapsible
        trigger={null}
        className="sidebar" 
        theme={ darkTheme ? 'dark' : 'light'}>
          <MenuListComponent theme={darkTheme}/>
          <ToggleThemeButtonComponent darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        </Sider>
        <Layout>
          <Header style={{padding:0, background:colorBgContainer}}>
            <AntButton 
            type="text" 
            className="toggle" 
            onClick={() => setCollapsed(!collapsed)}
            icon={ collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}/>
          </Header>
        </Layout>
      </Layout>
    </div>
  )
}

export default SidebarComponent
