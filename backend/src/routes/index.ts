import { Router } from "express";

import { authRoute } from "./auth.route";
import { clientRoutes } from "./client.routes";
import { officeRoutes } from "./office.routes";
import { taskRoutes } from "./tasks.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/auth", authRoute);
routes.use("/usuarios", userRoutes);
routes.use("/clientes", clientRoutes);
routes.use("/tarefas", taskRoutes);
routes.use("/cargos", officeRoutes);

export { routes };
