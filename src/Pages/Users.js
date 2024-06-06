import React from 'react';
import { Table, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import '../Styles/Roles.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Roles',
    dataIndex: 'roles',
  },
  {
    title: 'Mobile No',
    dataIndex: 'mobileNo',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
      <div className="horizontal-buttons">
        <Button type="default" style={{ marginRight: 8 ,color:'white',backgroundColor:'#0056b3'}}>Edit</Button>
        <Button type="default" style={{marginRight: 8,color:'white',backgroundColor:'red'}}>Delete</Button>
      </div>
    ),
  },
];

const data = [
  { key: '1', name: 'Commissioner' },
  { key: '2', name: 'Customer' },
  { key: '3', name: 'Sanitary Inspector' },
  { key: '4', name: 'Staff' },
  { key: '5', name: 'Supervisor' },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

function Users() {
  return (
    <div className="roles-container">
      <div className="roles-header">
        <h2>View Roles</h2>
        <div style={{ display: 'flex' }}>
          <Link to="/dashboard/newUser">
            <Button type="primary" icon={<PlusOutlined />} style={{ marginLeft: 'auto', marginRight: 16 }}>
              Create New User
            </Button>
          </Link>
        </div>
      </div>
      <SearchBar /><br></br><br></br>
      
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default Users;
