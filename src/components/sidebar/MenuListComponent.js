import React from 'react'
import { useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { 
    HomeOutlined, 
    OrderedListOutlined, 
    ShopOutlined, 
    AreaChartOutlined
} from '@ant-design/icons';
import { nanoid } from "nanoid";
import { PaymentOutlined, CurrencyRupee, CreditCard } from '@mui/icons-material';

const MenuListComponent = ({darkTheme}) => {
    const url = useLocation();
    console.log(url);
    const sideMenus = [
        {
          id: nanoid(),
          text: "Business",
          icon: <HomeOutlined />,
          name: "business",
          subMenu:[],
        },
        {
          id: nanoid(),
          text: "Payment",
          icon: <CurrencyRupee />,
          name: "payment",
          subMenu:[
            {
              id: nanoid(),
              text: "UPI",
              icon: <PaymentOutlined />,
              name: "upi",
            },
            {
              id: nanoid(),
              text: "CreditCard",
              icon: <CreditCard />,
              name: "creditcard",
            }
          ],
        },
        {
          id: nanoid(),
          text: "Categories",
          icon: <OrderedListOutlined />,
          name: "categories",
          subMenu:[],
        },
        {
          id: nanoid(),
          text: "Staff",
          icon: <ShopOutlined />,
          name: "staff",
          subMenu:[],
        },
        {
          id: nanoid(),
          text: "Progress",
          icon: <AreaChartOutlined />,
          name: "progress",
          subMenu:[],
        },
      ];

    console.log(darkTheme);
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar">
        { sideMenus?.map((item) => (
        <Menu.Item key={item.name} icon={item.icon} title="Billing">
            {item.text}
        </Menu.Item>
        ))}
        {/* <Menu.SubMenu key="billing" icon={<BarsOutlined/>} title="Billing">
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
        </Menu.Item> */}
    </Menu>
  )
}

export default MenuListComponent
