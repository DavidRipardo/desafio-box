import React, { useEffect, useState } from "react";
import {
	TaskStatCard,
	TaskStatCount,
	TaskStatDescription,
	TaskStatIcon,
	TaskStatInfo,
	TaskStatTitle,
	TaskStatsGrid,
} from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import imgcardtarefas from "/src/assets/tarefascard.png";
import imgcardAndamento from "/src/assets/andamentocard.png";
import imgcardfinish from "/src/assets/finalizadascard.png";
import { getTasks } from "../../../services/api-tasks"; // Importe suas funções de API aqui

export function TaskCard() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		AOS.init({
			duration: 2000, // Duração da animação em milissegundos
		});
		fetchTasks(); // Inicie a busca das tarefas ao montar o componente
	}, []);

	const fetchTasks = async () => {
		try {
			const response = await getTasks(); // Substitua getTasks pelo método correto de sua API
			setTasks(response.data); // Atualize o estado com os dados recebidos
		} catch (error) {
			console.error("Erro ao buscar tarefas:", error);
		}
	};

	const taskStats =
		tasks.length > 0
			? [
					{
						count: tasks.length, // Use o tamanho da array tasks para contar as tarefas
						title: "Tarefas",
						description: "Lista de tarefas requisitadas",
						icon: imgcardtarefas,
						animation: "zoom-in", // Animação específica para este card
					},
					{
						count: tasks.filter((task) => task.status === "Feito").length, // Contagem das tarefas finalizadas
						title: "Tarefas finalizadas",
						description: "Lista de tarefas finalizadas",
						icon: imgcardAndamento,
						animation: "flip-left", // Animação específica para este card
					},
					{
						count: tasks.filter((task) => task.status === "Fazendo").length, // Contagem das tarefas em andamento
						title: "Tarefas em andamento",
						description: "Lista de tarefas em andamento",
						icon: imgcardfinish,
						animation: "zoom-in-down", // Animação específica para este card
					},
				]
			: [
					{
						count: 0,
						title: "Tarefas",
						description: "Lista de tarefas requisitadas",
						icon: imgcardtarefas,
						animation: "zoom-in", // Animação específica para este card
					},
					{
						count: 0,
						title: "Tarefas finalizadas",
						description: "Lista de tarefas finalizadas",
						icon: imgcardAndamento,
						animation: "flip-left", // Animação específica para este card
					},
					{
						count: 0,
						title: "Tarefas em andamento",
						description: "Lista de tarefas em andamento",
						icon: imgcardfinish,
						animation: "zoom-in-down", // Animação específica para este card
					},
				];

	return (
		<TaskStatsGrid>
			{taskStats.map((task, index) => (
				<TaskStatCard
					key={index}
					data-aos={task.animation}
					data-aos-delay={index * 300} // Delay crescente para cada card
				>
					<TaskStatInfo>
						<TaskStatCount>{task.count}</TaskStatCount>
						<TaskStatTitle>{task.title}</TaskStatTitle>
						<TaskStatDescription>{task.description}</TaskStatDescription>
					</TaskStatInfo>
					<TaskStatIcon src={task.icon} alt={task.title} />
				</TaskStatCard>
			))}
		</TaskStatsGrid>
	);
}
