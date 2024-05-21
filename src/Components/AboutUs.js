// src/AboutUs.js
import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>About Us</h1>
        <p>
          Welcome to the Task Management Dashboard. Our goal is to help you manage your tasks efficiently and effectively.
        </p>
        <p>
          Our platform offers a variety of features including task creation, updating, and deletion. You can also set priorities and due dates to ensure timely completion of your tasks.
        </p>
        <p>
          Whether you are managing personal tasks or coordinating with a team, our dashboard is designed to simplify your workflow and increase productivity.
        </p>
        <p>
          Thank you for choosing our Task Management Dashboard. We are committed to providing you with the best tools to succeed.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
