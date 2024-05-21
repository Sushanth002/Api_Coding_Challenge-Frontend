// src/Login.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import styles from './Login.module.css';

function Login() {

  const [uid, setUserId] = useState("admin");
  const [pwd, setPassword] = useState("admin123");
  const [result, setResult] = useState("");

  let navigate = useNavigate(); // for navigation using code
  let location = useLocation(); // for reading query string params

  function loginButton_click() {

    // returns the query string from the current url
    const queryString = location.search;
    let strReturnUrl = new URLSearchParams(queryString).get('returnUrl');

    if (strReturnUrl == null) {
      strReturnUrl = "/dashboard";
    }

    if (uid === "admin" && pwd === "admin123") {
      // In real-time apps, we will get the token from the server
      // JWT token is the popular token generation library          
      let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
      sessionStorage.setItem('user-token', token);
      navigate(strReturnUrl);
    }
    else {
      setResult("Invalid User Id or Password");
    }
  }

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <fieldset>
          <legend>User Login</legend>

          <label>User Id:</label>
          <input type="text" value={uid} onChange={(event) => setUserId(event.target.value)} />

          <label>Password:</label>
          <input type="password" value={pwd} onChange={(event) => setPassword(event.target.value)} />

          <input type="button" onClick={loginButton_click} value="Login" />
          <p>{result}</p>
        </fieldset>
      </form>
    </div>
  );

}

export default Login;
