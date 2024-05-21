import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../Services/task.service';
import styles from './AddTask.module.css';

const AddTask = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    description: '',
    due_date: '',
    priority: 'Medium',
    status: 'Pending'
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task)
      .then(response => {
        alert('Task added successfully');
        navigate('/dashboard');
      })
      .catch(error => {
        console.error("There was an error adding the task!", error);
      });
  };

  return (
    <div className={styles.addTaskContainer}>
      <h3>Add New Task</h3>
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
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
