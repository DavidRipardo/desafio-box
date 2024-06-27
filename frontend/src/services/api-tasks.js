// src/services/usersRoute.js
import axios from "axios";

export const taskRoute = axios.create({
	baseURL: "http://localhost:3333/api",
});

export const getTasks = () => taskRoute.get("/tarefas");
export const createTask = (data) => taskRoute.post("/tarefas", data);
export const updateTask = (id, data) => taskRoute.put(`/tarefas/${id}`, data);
export const deleteTask = (id) => taskRoute.delete(`/tarefas/${id}`);
