// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTasks from './Components/AllTasks';
import UpdateTask from './Components/UpdateTask';
import AddTask from './Components/AddTask';
import Navbar from './Components/Navbar';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoutes';
import Footer from './Components/Footer';
import PageNotFound from './Components/PageNotFound';

const routing = (
  <Router>
    <hr />
    <Navbar />
    <hr />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }>
        <Route path="all-tasks" element={<AllTasks />} />
        
        <Route path="add-task" element={<AddTask />} />
      </Route>
      <Route path="update-task/:id" element={<UpdateTask />} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
    {<hr/>}
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
