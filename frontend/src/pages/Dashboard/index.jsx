// Importa o React
import React, { useEffect, useState } from "react";

// Importa os estilos do componente Dashboard
import styles from "./dashboard.module.css";

// Importa os componentes CardStatus, TaskCard e Navbar do diretório __dashboard
import { CardStatus, TaskCard, Navbar } from "../../components/__dashboard";
import { api } from "../../services/api";
import { Header } from "../../components/__dashboard/Header";

// Exporta a função Dashboard
export function Dashboard() {
	const [totalUsers, setTotalUsers] = useState(0);
	const [totalClients, setTotalClients] = useState(0);
	const [totalOffices, setTotalOffices] = useState(0);
	const [totalTasks, setTotalTasks] = useState(0);


	async function getDashboardStatus() {
		try {
			const [resUsers, resClients, resOffices, resTasks] = await Promise.all([
				api.get(`/usuarios`),
				api.get(`/clientes`),
				api.get(`/cargos`),
				api.get(`/tarefas`),
			]);

			setTotalUsers(resUsers.data.length);
			setTotalClients(resClients.data.length);
			setTotalOffices(resOffices.data.length);
			setTotalTasks(resTasks.data.length);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getDashboardStatus();
	}, []);

	return (
		<div className={styles.tela}>
			<Navbar />
			<main>
				<Header/>
				<CardStatus
					totalUsers={totalUsers}
					totalClients={totalClients}
					totalOffices={totalOffices}
					totalTasks={totalTasks}
				/>
				<TaskCard />
			</main>
		</div>
	);
}
