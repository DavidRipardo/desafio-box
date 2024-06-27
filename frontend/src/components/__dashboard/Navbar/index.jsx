import React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarSection,
	SidebarSectionTitle,
	SidebarItem,
	SidebarLogout,
} from "./styles"; // Importação dos estilos e componentes definidos
import { useParams } from "react-router-dom"; // Importação do useParams

// Importação das imagens para os ícones
import imgLogo from "/src/assets/logonavbar.png";
import imgMonitoramento from "/src/assets/monitoramento.png";
import imgUsuarios from "/src/assets/todos.png";
import imgClientes from "/src/assets/clientes.png";
import imgFuncionario from "/src/assets/funcionario.png";
import imgTarefas from "/src/assets/tarefas.png";
import imgLogout from "/src/assets/logout.png";

export function Navbar() {
	const { id } = useParams(); // Obtendo o parâmetro da rota

	return (
		<Sidebar>
			<SidebarContent>
				{/* Cabeçalho do Sidebar com o logo e o título */}
				<SidebarHeader>
					<img src={imgLogo} alt="Admin Panel Icon" />
					<h1>Painel Administrativo</h1>
				</SidebarHeader>

				{/* Seção do Monitoramento */}
				<SidebarSection>
					<SidebarItem to={`/dashboard/${id}`}>
						<img src={imgMonitoramento} alt="Monitoring Icon" />
						<span style={{ paddingRight: "55px" }}>Monitoramentos</span>
					</SidebarItem>
				</SidebarSection>

				{/* Seção de Pessoas com seus respectivos itens */}
				<SidebarSectionTitle>Pessoas</SidebarSectionTitle>
				<SidebarItem to={`/usuarios/${id}`}>
					<img src={imgUsuarios} alt="Users Icon" />
					<span>Usuários</span>
				</SidebarItem>

				<SidebarItem to={`/clientes/${id}`}>
					<img src={imgClientes} alt="Clients Icon" />
					<span>Clientes</span>
				</SidebarItem>

				<SidebarItem to={`/funcionarios/${id}`}>
					<img src={imgFuncionario} alt="Employees Icon" />
					<span>Funcionários</span>
				</SidebarItem>

				{/* Seção de Tarefas com seu respectivo item */}
				<SidebarSectionTitle>Tarefas</SidebarSectionTitle>
				<SidebarItem to={`/tarefas/${id}`}>
					<img src={imgTarefas} alt="Tasks Icon" />
					<span>Todas</span>
				</SidebarItem>

				{/* Item de Logout no final do Sidebar */}
				<SidebarLogout>
					<img src={imgLogout} alt="Logout Icon" />
					<span>Sair</span>
				</SidebarLogout>
			</SidebarContent>
		</Sidebar>
	);
}
