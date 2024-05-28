import React from 'react';
import AppLayout from './Layout';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './SignIn';
import Dashboard from '../src/Pages/Dashboard';
import Roles from '../src/Pages/Roles';
import Users from '../src/Pages/Users';
import NewUser from '../src/Pages/NewUser';
import VehicleMaster from '../src/Pages/VehicleMaster';
import NewVehicle from '../src/Pages/NewVehicle';

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
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
