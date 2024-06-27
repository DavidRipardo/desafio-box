import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/AppError";
import { routes } from "./routes";
const app = express();
import cors from "cors";
import timeout from "connect-timeout";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { ConnectDatabase } from "./database/sequelize.config";

app.use(express.json());
app.use(cors());
app.use(timeout("10s"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use("/api", routes);

app.use(
	(err: Error, request: Request, response: Response, next: NextFunction) => {
		if (err instanceof AppError) {
			return response.status(err.statusCode).json({
				status: "error",
				message: err.message,
			});
		}
		return response.status(500).json({
			status: "error",
			message: `Internal server - ${err.message}`,
		});
	},
);

app.listen(3333, () => {
	console.log("Servidor online http://localhost:3333/api-docs");
	ConnectDatabase();
});
