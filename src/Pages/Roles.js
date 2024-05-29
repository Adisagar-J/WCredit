import React from 'react';
import { Table, Button, Switch } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './Roles.css';
import SearchBar from './SearchBar';
import { Router, Routes } from 'react-router-dom';

const columns = [
  {
    title: 'Role Name',
    dataIndex: 'roleName',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
      <div className="horizontal-buttons">
        <Button type="primary" style={{ marginRight: 8 }}>Show</Button>
        <Button type="default" style={{ marginRight: 8 ,color:'white',backgroundColor:'#0056b3'}}>Edit</Button>
        <Button type="default" style={{marginRight: 8,color:'white',backgroundColor:'red'}}>Delete</Button>
      </div>
    ),
  },
];

const data = [
  { key: '1', roleName: 'Commissioner', },
  { key: '2', roleName: 'Customer', },
  { key: '3', roleName: 'Sanitary Inspector', },
  { key: '4', roleName: 'Staff', },
  { key: '5', roleName: 'Supervisor', },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

function Roles() {
  return (
    <div className="roles-container">
      <div className="roles-header">
      <h2>View Roles</h2>
      <div style={{ display: 'flex' }}>
          <Button type="primary" icon={<PlusOutlined />} style={{ marginLeft: 'auto', marginRight: 16 }}>
            Create New Role
          </Button>
        </div>
      </div>      
      <SearchBar/>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default Roles;
