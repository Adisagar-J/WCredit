import React from 'react';
import { Table, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './Roles.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Points',
    dataIndex: 'points',
  },
  {
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
      <div className="horizontal-buttons">
        <Button type="default" style={{ marginRight: 8 }}>Edit</Button>
        <Button type="danger">Delete</Button>
      </div>
    ),
  },
];

const data = [
  { key: '1', vehicleName: 'Commissioner' },
  { key: '2', vehicleName: 'Customer' },
  { key: '3', vehicleName: 'Sanitary Inspector' },
  { key: '4', vehicleName: 'Staff' },
  { key: '5', vehicleName: 'Supervisor' },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

function ViewPoints() {
  return (
    <div className="roles-container">
      <div className="roles-header">
        <h2>View Points Details</h2>
        <div style={{ display: 'flex' }}>
          <Link to="/dashboard/newpoints">
            <Button type="primary" icon={<PlusOutlined />} style={{ marginLeft: 'auto', marginRight: 16 }}>
              New
            </Button>
          </Link>
        </div>
      </div>
      <SearchBar />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default ViewPoints;
