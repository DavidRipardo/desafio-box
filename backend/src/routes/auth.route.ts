import { Router } from "express";
import { LoginUserController } from "../modules/auth";

const loginUserController = new LoginUserController();

const authRoute = Router();

authRoute.post("/", loginUserController.handle);
// authRoute.delete("/:id", deleteClientController.handle);

export { authRoute };
