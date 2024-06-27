import { Router } from "express";
import {
	CreateOfficeController,
	DeleteOfficeController,
	GetAllOfficesController,
	GetOfficeByIdController,
	UpdateOfficeController,
} from "../modules/offices";

const createTaskController = new CreateOfficeController();
const getAllTasksController = new GetAllOfficesController();
const deleteTaskController = new DeleteOfficeController();
const updateTaskController = new UpdateOfficeController();
const getTaskByIdController = new GetOfficeByIdController();

const officeRoutes = Router();

officeRoutes.post("/", createTaskController.handle);
officeRoutes.get("/", getAllTasksController.handle);
officeRoutes.delete("/:id", deleteTaskController.handle);
officeRoutes.patch("/:id", updateTaskController.handle);
officeRoutes.get("/:id", getTaskByIdController.handle);

export { officeRoutes };
