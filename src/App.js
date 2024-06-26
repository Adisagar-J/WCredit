// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AppLayout from './Layout';
import SignIn from './SignIn';
import Dashboard from '../src/Pages/Dashboard';
import Roles from '../src/Pages/Roles';
import Users from '../src/Pages/Users';
import NewUser from '../src/Pages/NewUser';
import VehicleMaster from '../src/Pages/VehicleMaster';
import NewVehicle from '../src/Pages/NewVehicle';
import WardMaster from '../src/Pages/WardMaster';
import NewWard from '../src/Pages/Newward';
import StaffandVehicle from '../src/Pages/StaffandVehicle';
import NewStaffAssign from '../src/Pages/NewStaffAssign';
import ViewPoints from './Pages/ViewPointsDetails';
import NewPoints from './Pages/NewPoints';
import LocationTracking from './Pages/LocationTracking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard/*" element={<AppLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="roles" element={<Roles />} />
          <Route path="users" element={<Users />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="vehicle-master" element={<VehicleMaster />} />
          <Route path="newVehicle" element={<NewVehicle />} />
          <Route path="master-ward" element={<WardMaster />} />
          <Route path="newward" element={<NewWard />} />
          <Route path="staff-Vehicle" element={<StaffandVehicle />} />
          <Route path="newStaffAssign" element={<NewStaffAssign />} />
          <Route path="viewpoins" element={<ViewPoints />} />
          <Route path="newpoints" element={<NewPoints />} />
          <Route path="location-tracking" element={<LocationTracking />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
