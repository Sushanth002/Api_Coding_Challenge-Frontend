// src/PageNotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={styles.pageNotFoundContainer}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className={styles.homeLink}>Go to Home</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
