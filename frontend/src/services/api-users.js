// src/services/usersRoute.js
import axios from "axios";

export const usersRoute = axios.create({
	baseURL: "http://localhost:3333/api",
});

export const getUsers = () => usersRoute.get("/usuarios");
export const getUserId = (id) => usersRoute.get(`/usuarios/${id}`);
export const createUser = (user) => usersRoute.post("/usuarios", user);
export const updateUser = (id, user) => usersRoute.put(`/usuarios/${id}`, user);
export const deleteUser = (id) => usersRoute.delete(`/usuarios/${id}`);
