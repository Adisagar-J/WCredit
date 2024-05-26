import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/Common.css';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <ul>
                    <li><Link className="sidebar" to="/">Dashboard</Link></li>
                    <li><Link className="sidebar" to="/roles">Roles</Link></li>
                    {/* <li><Link to="/users">Users</Link></li>
                    <li><Link to="/add-wardmember">Add Wardmember</Link></li>
                    <li><Link to="/vehicle-master">Vehicle Master</Link></li>
                    <li><Link to="/master-ward">Master Ward</Link></li>
                    <li><Link to="/assign-staff-vehicle">Assign Staff & Vehicle</Link></li>
                    <li><Link to="/master-points">Master Points</Link></li>
                    <li><Link to="/location-tracking">Location Tracking</Link></li> */}
                </ul>
            </aside>
            <main className='main-content'>
                <div>
                    <header className='header'>
                        <h1>Dashboard</h1>
                    </header>
                </div>
                <br></br>
                <section className='content'>
                    <div className='card'>
                        <h2>Total Staff</h2>
                        <p>9.69K</p>
                        <span>+1.9% since last month</span>
                    </div>
                    <div className='card'>
                        <h2>Total Member</h2>
                        <p>346.2</p>
                        <span>+2.45% since last week</span>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;