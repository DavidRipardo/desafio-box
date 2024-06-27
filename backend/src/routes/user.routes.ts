import { Router } from "express";
import {
	CreateUserController,
	DeleteUserController,
	GetAllUsersController,
	GetUserByIdController,
	UpdateUserController,
} from "../modules/users";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const getUserByIdController = new GetUserByIdController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get("/", getAllUsersController.handle);
userRoutes.delete("/:id", deleteUserController.handle);
userRoutes.put("/:id", updateUserController.handle);
userRoutes.get("/:id", getUserByIdController.handle);

export { userRoutes };
