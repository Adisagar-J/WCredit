import React from 'react';
import './Dashboard.css';

function Dashboard()
{
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <ul>
                    <li>Dashboard</li>
                    <li>Roles</li>
                    <li>Users</li>
                    <li>Add Wardmember</li>
                    <li>Vehicle Master</li>
                    <li>Master Ward</li>
                    <li>Assign Stadd & vehicle</li>
                    <li>Master Points</li>
                    <li>Location Tracking</li>
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