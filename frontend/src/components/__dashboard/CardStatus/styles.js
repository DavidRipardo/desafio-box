import styled from "styled-components";

// Contêiner de grade para os cartões de estatísticas
export const StatsGrid = styled.section`
  display: grid; // Define um contêiner de grid
  grid-template-columns: repeat(4, 1fr); // Define quatro colunas com largura igual
  gap: 10px; // Espaçamento entre os itens do grid
  margin-bottom: 30px; // Margem inferior do grid
  @media (max-width: 991px) {
    grid-template-columns: 1fr; // Ajusta para uma coluna em telas menores
  }
`;

// Estilização para cada cartão de estatísticas
export const StatCard = styled.article`
  display: flex; // Exibe o conteúdo em um layout flexível
  justify-content: space-between; // Espaça os itens no cartão de forma igual
  border-radius: 40px; // Bordas arredondadas
  box-shadow: 0 20px 150px rgba(0, 0, 0, 0.08); // Sombra do cartão
  border: 1px solid #eee; // Borda do cartão
  background-color: #fff; // Cor de fundo do cartão
  padding: 29px 5px; // Padding interno do cartão
  width: 18vw; // Largura do cartão
`;

// Contêiner para informações do cartão
export const StatInfo = styled.div`
  display: flex; // Exibe o conteúdo em um layout flexível
  flex-direction: column; // Direção dos itens em coluna
`;

// Estilização para o contador de estatísticas
export const StatCount = styled.span`
  color: #5867DD; // Cor do texto
  margin-left: 5px; // Margem à esquerda
  font: 60px/100% Nunito, sans-serif; // Fonte e tamanho do texto
  @media (max-width: 991px) {
    font-size: 40px; // Ajusta o tamanho da fonte em telas menores
  }
`;

// Estilização para o título das estatísticas
export const StatTitle = styled.h3`
  font: 800 20px/113% Nunito, sans-serif; // Fonte, peso e tamanho do texto
  margin: 12px 0; // Margem superior e inferior
`;

// Estilização para a descrição das estatísticas
export const StatDescription = styled.p`
  font: 400 20px Nunito, sans-serif; // Fonte e tamanho do texto
  margin: 0; // Sem margem
  position: relative; // Posição relativa
  width: 200px; // Largura da descrição
`;

// Estilização para o ícone das estatísticas
export const StatIcon = styled.img`
  width: 150px; // Largura do ícone
  height: 150px; // Altura do ícone
  position: relative; // Posição relativa
  right: 85px; // Deslocamento à direita
`;
