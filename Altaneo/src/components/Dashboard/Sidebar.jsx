import React from 'react';
import { Flex, Menu } from 'antd';
import logo from '../../assets/logo.png';
import { UserOutlined,  OrderedListOutlined, CarryOutOutlined,ClockCircleOutlined } from '@ant-design/icons';

const Sidebar = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo" >
          <img src={logo} alt="Logo" style={{ width: '190px' }} />
        </div>
      </Flex>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} className="menu-bar" items={[
        {
          key: '1',
          icon: <UserOutlined />,
          label: 'Invoice Discounting',
        },
        // {
        //   key: '2',
        //   icon: <CarryOutOutlined />,
        //   label: 'Asset Leasing',
        // },
        {
          key: '3',
          icon: <OrderedListOutlined />,
          label: 'Bonds',
        },
        {
          key: '4',
          icon: <ClockCircleOutlined  />,
          label: 'Instant Loan',
        }
      
      ]}/>
    </>
  );
};

export default Sidebar;
