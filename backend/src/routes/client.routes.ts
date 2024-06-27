import { Router } from "express";
import {
	DeleteClientController,
	GetAllClientsController,
	GetClientByIdController,
	UpdateClientController,
} from "../modules/clients";

const getAllClientsController = new GetAllClientsController();
const deleteClientController = new DeleteClientController();
const updateClientController = new UpdateClientController();
const getClientByIdController = new GetClientByIdController();

const clientRoutes = Router();

clientRoutes.get("/", getAllClientsController.handle);
clientRoutes.delete("/:id", deleteClientController.handle);
clientRoutes.patch("/:id", updateClientController.handle);
clientRoutes.get("/:id", getClientByIdController.handle);

export { clientRoutes };
