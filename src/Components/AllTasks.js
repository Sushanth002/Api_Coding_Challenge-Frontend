// src/AllTasks.js
import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getAllTasks, deleteTask } from '../Services/task.service';
import styles from './AllTasks.module.css';

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllTasks()
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the tasks!", error);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(id)
        .then(response => {
          setTasks(tasks.filter(task => task.id !== id));
          alert('Task deleted successfully');
        })
        .catch(error => {
          console.error("There was an error deleting the task!", error);
        });
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update-task/${id}`);
  };

  return (
    <div className={styles.tasksContainer}>
      <h2>All Tasks</h2>
      {tasks.length > 0 ? (
        <div className={styles.cardsContainer}>
          {tasks.map(task => (
            <div key={task.id} className={styles.card}>
              <h2>{task.title}</h2>
              <p>Task Id: {task.id}</p>
              <p>{task.description}</p>
              <p>Due Date: {task.due_date}</p>
              <p>Priority: {task.priority}</p>
              <p>Status: {task.status}</p>
              <button onClick={() => handleUpdate(task.id)}>Update</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default AllTasks;
