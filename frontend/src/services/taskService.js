import axios from "axios";

const API_URL = "http://localhost:5218/api/tasks";

export const getTasks = (status, search) =>
  axios.get(API_URL, {
    params: { status, search }
  });

export const createTask = (task) =>
  axios.post(API_URL, task);

export const updateTask = (id, task) =>
  axios.put(`${API_URL}/${id}`, task);

export const deleteTask = (id) =>
  axios.delete(`${API_URL}/${id}`);