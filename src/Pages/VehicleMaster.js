import React from 'react';
import { Table, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './Roles.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Vehicle Name',
    dataIndex: 'vehicleName',
  },
  {
    title: 'Vehicle Number',
    dataIndex: 'vehicleNumber',
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
  { key: '1', vehicleName: 'Commissioner' },
  { key: '2', vehicleName: 'Customer' },
  { key: '3', vehicleName: 'Sanitary Inspector' },
  { key: '4', vehicleName: 'Staff' },
  { key: '5', vehicleName: 'Supervisor' },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

function VehicleMaster() {
  return (
    <div className="roles-container">
      <div className="roles-header">
        <h2>View Roles</h2>
        <div style={{ display: 'flex' }}>
          <Link to="/dashboard/newVehicle">
            <Button type="primary" icon={<PlusOutlined />} style={{ marginLeft: 'auto', marginRight: 16 }}>
              New Vehicle
            </Button>
          </Link>
        </div>
      </div>
      <SearchBar /><br></br><br></br>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}

export default VehicleMaster;
