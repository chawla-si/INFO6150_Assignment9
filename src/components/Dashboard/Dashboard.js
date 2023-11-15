// Dashboard.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Dashboard.css'; 

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      <nav className="dashboard-nav">
        <ul>
          <li>
            <a href="/dashboard">Home</a>
          </li>
          <li>
            <a href="/dashboard/about-us">About Us</a>
          </li>
          <li>
            <a href="/dashboard/jobs">Jobs</a>
          </li>
          <li>
            <a href="/dashboard/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
