// src/Dashboard.js
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('user-token');
    navigate('/login');
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <h2>Welcome to Task Management Dashboard</h2>
        <nav className={styles.navMenu}>
          <ul>
            <li><Link to="all-tasks" className={styles.navLink}>Get All Tasks</Link></li>
            <li><Link to="add-task" className={styles.navLink}>Add Task</Link></li>
          </ul>
        </nav>
        <div className={styles.logoutContainer}>
          <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
        </div>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
