// src/services/taskService.js
import axios from 'axios';

const URL = 'http://localhost:3000/api/tasks';

export const getAllTasks = () => {
    return axios.get(URL);
  };
  

  export const getTasksById = (id) => {
    return axios.get(`${URL}/${id}`);
  };

  export const updateTaskById = (id, task) => {
    return axios.put(`${URL}/update/${id}`, task);
  };

  export const deleteTask = (id) => {
    return axios.delete(`${URL}/delete/${id}`);
  };

export const addTask = (task) => {
  return axios.post(`${URL}/add`, task);
};


