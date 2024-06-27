import { Router } from "express";
import {
	CreateTasksController,
	DeleteTaskController,
	GetAllTasksController,
	GetTaskByIdController,
	UpdateTaskController,
} from "../modules/tasks";

const createTaskController = new CreateTasksController();
const getAllTasksController = new GetAllTasksController();
const deleteTaskController = new DeleteTaskController();
const updateTaskController = new UpdateTaskController();
const getTaskByIdController = new GetTaskByIdController();

const taskRoutes = Router();

taskRoutes.post("/", createTaskController.handle);
taskRoutes.get("/", getAllTasksController.handle);
taskRoutes.delete("/:id", deleteTaskController.handle);
taskRoutes.put("/:id", updateTaskController.handle);
taskRoutes.get("/:id", getTaskByIdController.handle);

export { taskRoutes };
