// src/UpdateTask.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { getTasksById, updateTaskById } from '../Services/task.service';
import styles from './UpdateTask.module.css';

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    description: '',
    due_date: '',
    priority: 'Medium',
    status: 'Pending'
  });

  useEffect(() => {
    getTasksById(id)
      .then(response => {
        setTask(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the task!", error);
      });
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTaskById(id, task)
      .then(response => {
        alert('Task updated successfully');
        navigate('/dashboard');  // Correct path after update
      })
      .catch(error => {
        console.error("There was an error updating the task!", error);
      });
  };

  return (
    <div className={styles.updateTaskContainer}>
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Due Date</label>
          <input
            type="date"
            name="due_date"
            value={task.due_date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Priority</label>
          <select name="priority" value={task.priority} onChange={handleChange}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          <label>Status</label>
          <select name="status" value={task.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default UpdateTask;