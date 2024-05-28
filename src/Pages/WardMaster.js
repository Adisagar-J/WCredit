import React from 'react';
import { Table, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './Roles.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Ward No',
    dataIndex: 'WardNo',
  },
  {
    title: 'Area',
    dataIndex: 'area',
  },
  {
    title: 'Locality',
    dataIndex: 'locality',
  },
  {
    title: 'Street',
    dataIndex: 'street',
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

function WardMaster() {
  return (
    <div className="roles-container">
      <div className="roles-header">
        <h2>Ward Master</h2>
        <div style={{ display: 'flex' }}>
          <Link to="/dashboard/newward">
            <Button type="primary" icon={<PlusOutlined />} style={{ marginLeft: 'auto', marginRight: 16 }}>
              New Ward
            </Button>
          </Link>
        </div>
      </div>
      <SearchBar />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default WardMaster;
