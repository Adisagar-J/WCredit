import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import Dashboard from '../src/Pages/Dashboard';
import Roles from '../src/Pages/Roles';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="/roles" Pages={Roles} />
        {/* <Route path="/users" Pages={Users} />
        <Route path="/add-wardmember" Pages={AddWardMember} />
        <Route path="/vehicle-master" Pages={VehicleMaster} />
        <Route path="/master-ward" Pages={MasterWard} />
        <Route path="/assign-staff-vehicle" Pages={AssignStaffVehicle} />
        <Route path="/master-points" Pages={MasterPoints} />
        <Route path="/location-tracking" Pages={LocationTracking} /> */}
      </Routes>
    </Router>
  );
}

export default App;