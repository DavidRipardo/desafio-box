import styled from "styled-components"; // Importa styled-components para criar componentes estilizados
import {
  StatCard,
  StatCount,
  StatDescription,
  StatIcon,
  StatInfo,
  StatTitle,
} from "../CardStatus/styles"; // Importa componentes estilizados de outro módulo

// Define um contêiner de grade para os cartões de estatísticas de tarefas
export const TaskStatsGrid = styled.section`
  display: grid; // Define um contêiner de grade
  grid-template-columns: repeat(3, 1fr); // Três colunas de largura igual
  gap: 10px; // Espaçamento de 10px entre os itens
  margin-bottom: 30px; // Margem inferior de 30px

  @media (max-width: 991px) { // Regras de estilo para telas menores que 991px
    grid-template-columns: 1fr; // Uma coluna de largura total
  }
`;

// Define um cartão de estatísticas de tarefas, estendendo os estilos de StatCard
export const TaskStatCard = styled(StatCard)`
  width: 25vw; // Define a largura do cartão como 25% da largura da viewport
`;

// Estilos para as informações do cartão de estatísticas de tarefas, estendendo StatInfo
export const TaskStatInfo = styled(StatInfo)``;

// Estilos para a contagem de estatísticas de tarefas, estendendo StatCount
export const TaskStatCount = styled(StatCount)``;

// Estilos para o título do cartão de estatísticas de tarefas, estendendo StatTitle
export const TaskStatTitle = styled(StatTitle)``;

// Estilos para a descrição do cartão de estatísticas de tarefas, estendendo StatDescription
export const TaskStatDescription = styled(StatDescription)``;

// Estilos para o ícone do cartão de estatísticas de tarefas, estendendo StatIcon
export const TaskStatIcon = styled(StatIcon)`
  width: 160px; // Define a largura do ícone
  position: relative; // Define a posição como relativa
  left: 3px; // Move o ícone 3px para a esquerda
`;
