import React from 'react';
import { Layout, Flex } from 'antd';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import MainContent from './MainContent';
import SideContent from './SideContent';

import './Dashboard.css';

const { Sider, Header, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout>
      <Sider theme="light" collapsible collapsed={false} className="sider">
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="Dashboardheader">
          <DashboardHeader />
        </Header>
        <Content className="content">
          <Flex gap="large">
            <MainContent />
            <SideContent />
            
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
