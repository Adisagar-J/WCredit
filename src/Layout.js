import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  UserAddOutlined,
  CarOutlined,
  HomeOutlined,
  ToolOutlined,
  AimOutlined
} from '@ant-design/icons';
import './Layout.css';

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const location = useLocation();
  const selectedKey = location.pathname;

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/roles" icon={<TeamOutlined />}>
            <Link to="/dashboard/roles">Roles</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/users" icon={<UserOutlined />}>
            <Link to="/dashboard/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/add-wardmember" icon={<UserAddOutlined />}>
            <Link to="/dashboard/add-wardmember">Add Wardmember</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/vehicle-master" icon={<CarOutlined />}>
            <Link to="/dashboard/vehicle-master">Vehicle Master</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/master-ward" icon={<HomeOutlined />}>
            <Link to="/dashboard/master-ward">Master Ward</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/assign-staff-vehicle" icon={<ToolOutlined />}>
            <Link to="/dashboard/staff-Vehicle">Assign Staff & Vehicle</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/master-points" icon={<AimOutlined />}>
            <Link to="/dashboard/master-points">Master Points</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/location-tracking" icon={<AimOutlined />}>
            <Link to="/dashboard/location-tracking">Location Tracking</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
