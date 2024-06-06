import React from 'react';
import '../Styles/Common.css';

function Dashboard() {
    return (
        <div>
            <header className='header'>
                <h1>Dashboard</h1>
            </header>
            <br />
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
        </div>
    );
}

export default Dashboard;
