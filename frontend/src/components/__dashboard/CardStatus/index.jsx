import React, { useEffect } from "react";
import {
	StatCard,
	StatCount,
	StatDescription,
	StatIcon,
	StatInfo,
	StatTitle,
	StatsGrid,
} from "./styles"; // Importa componentes estilizados
import AOS from "aos"; // Importa a biblioteca de animação AOS
import "aos/dist/aos.css"; // Importa os estilos da biblioteca AOS

import imgUsuarios from "/src/assets/usercard.png";
import imgClientes from "/src/assets/clientescard.png";
import imgCargos from "/src/assets/cargoscard.png";
import imgCardfuncionario from "/src/assets/funcionariocard.png"; // Importa imagens dos ícones

export function CardStatus({
	totalUsers,
	totalClients,
	totalOffices,
	totalTasks,
}) {
	// Hook useEffect para inicializar a animação AOS
	useEffect(() => {
		AOS.init({
			duration: 1000, // Duração da animação em milissegundos
		});
	}, []);

	// Dados dos cartões de status
	const statsData = [
		{
			count: totalUsers,
			title: "Usuários",
			description: "Total de usuários cadastrados",
			icon: imgUsuarios,
			animation: "zoom-in", // Animação específica para este card
		},
		{
			count: totalClients,
			title: "Clientes",
			description: "Total de clientes cadastrados",
			icon: imgClientes,
			animation: "flip-left", // Animação específica para este card
		},
		{
			count: totalOffices,
			title: "Cargos",
			description: "Total de cargos cadastrados",
			icon: imgCargos,
			animation: "zoom-in-down", // Animação específica para este card
		},
		{
			count: totalTasks,
			title: "Tarefas",
			description: "Total de tarefas cadastradas",
			icon: imgCardfuncionario,
			animation: "flip-right", // Animação específica para este card
		},
	];

	return (
		<StatsGrid>
			{/* Mapeia os dados dos cartões de status para renderizar cada card */}
			{statsData.map((stat, index) => (
				<StatCard
					key={index} // Chave única para cada card
					data-aos={stat.animation} // Define a animação AOS para o card
					data-aos-delay={index * 300} // Delay crescente para cada card
				>
					<StatInfo>
						<StatCount>{stat.count}</StatCount> {/* Contagem */}
						<StatTitle>{stat.title}</StatTitle> {/* Título */}
						<StatDescription>{stat.description}</StatDescription>{" "}
						{/* Descrição */}
					</StatInfo>
					<StatIcon src={stat.icon} alt={stat.title} /> {/* Ícone */}
				</StatCard>
			))}
		</StatsGrid>
	);
}
