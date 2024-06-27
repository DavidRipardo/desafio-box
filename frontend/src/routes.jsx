import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login, TableDashboard } from "./pages";
import { Tarefas } from "./pages/Tarefas";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/dashboard/:id",
		element: <Dashboard />,
	},
	{
		path: "/usuarios/:id",
		element: <TableDashboard title={"Usuários"} />,
	},
	{
		path: "/funcionarios/:id",
		element: <TableDashboard title={"Funcionários"} />,
	},
	{
		path: "/clientes/:id",
		element: <TableDashboard title={"Clientes"} />,
	},
	{
		path: "/tarefas/:id",
		element: <Tarefas />,
	},
]);
