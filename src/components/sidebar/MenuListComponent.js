import React from 'react'
import { Menu } from 'antd';
import { 
    HomeOutlined, 
    MoneyCollectOutlined, 
    OrderedListOutlined, 
    ShopOutlined, 
    PayCircleOutlined, 
    BarsOutlined, 
    AreaChartOutlined
} from '@ant-design/icons';

const MenuListComponent = ({darkTheme}) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar">
        <Menu.Item key="business" icon={<HomeOutlined/>}>
            Business
        </Menu.Item>
        <Menu.SubMenu key="billing" icon={<BarsOutlined/>} title="Billing">
            <Menu.Item key="all" icon={<MoneyCollectOutlined/>}>
                All
            </Menu.Item>
            <Menu.Item key="cash" icon={<MoneyCollectOutlined/>}>
                Cash & UPI
            </Menu.Item>
            <Menu.Item key="card" icon={<MoneyCollectOutlined/>}>
                Card
            </Menu.Item>
            <Menu.Item key="loan" icon={<MoneyCollectOutlined/>}>
                Loan
            </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="progress" icon={<AreaChartOutlined/>}>
            Progress
        </Menu.Item>
        <Menu.Item key="categories" icon={<OrderedListOutlined/>}>
            Categories
        </Menu.Item>
        <Menu.Item key="staff" icon={<ShopOutlined/>}>
            Staff
        </Menu.Item>
        <Menu.Item key="payment" icon={<PayCircleOutlined/>}>
            Payment
        </Menu.Item>
    </Menu>
  )
}

export default MenuListComponent
