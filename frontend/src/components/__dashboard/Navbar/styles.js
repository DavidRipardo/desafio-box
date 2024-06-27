import { Link } from "react-router-dom";
import styled from "styled-components";

// Estilização do menu lateral (Sidebar)
export const Sidebar = styled.aside`
  width: 16%; // Largura inicial do menu lateral
  position: fixed; // Fixa o menu lateral na página
  @media (max-width: 991px) {
    width: 100%; // Em telas menores, ocupa toda a largura
  }
`;

// Estilização do conteúdo do menu lateral
export const SidebarContent = styled.nav`
  border-radius: 40px; // Borda arredondada para o conteúdo do menu
  background-color: #5867dd; // Fundo azul do menu
  display: flex;
  flex-direction: column; // Organiza o conteúdo em coluna
  color: #fff; // Texto branco
  margin: 5px auto 0; // Margem externa
  padding: 22px 0 45px; // Preenchimento interno
  padding-bottom: 0px; // Ajuste adicional de preenchimento inferior
  width: 280px;
  @media (max-width: 991px) {
    margin-top: 40px; // Margem superior ajustada para telas menores
  }
`;

// Estilização do cabeçalho do menu lateral
export const SidebarHeader = styled.div`
  display: flex;
  align-items: center; // Centraliza verticalmente os itens
  gap: 11px; // Espaço entre os elementos
  padding: 0 27px; // Preenchimento interno
  margin-bottom: 30px; // Margem inferior
`;

// Estilização das seções do menu lateral
export const SidebarSection = styled.div`
  display: flex;
  align-items: center; // Centraliza verticalmente os itens
  justify-content: center; // Centraliza horizontalmente os itens
  gap: 20px; // Espaço entre os elementos
  padding: 0 27px; // Preenchimento interno
`;

// Estilização do título das seções do menu lateral
export const SidebarSectionTitle = styled.h2`
  font-family: Nunito, sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0 27px; // Preenchimento interno
`;

// Estilização dos itens individuais do menu lateral, utilizando o componente Link do react-router-dom
export const SidebarItem = styled(Link)`
  display: flex;
  align-items: center; // Centraliza verticalmente os itens
  gap: 14px; // Espaço entre os elementos
  padding: 5px 27px; // Preenchimento interno
  margin-bottom: 10px; // Margem inferior
  text-decoration: none; // Remove a decoração de link
  color: #ffffff; // Cor do texto branco
  cursor: pointer; // Altera o cursor ao passar por cima do item

  img {
    width: 40px; // Largura da imagem do ícone
    height: 40px; // Altura da imagem do ícone
    border-radius: 50%; // Borda arredondada para a imagem do ícone
    background-color: #374bae; // Cor de fundo do ícone
  }

  span {
    font-family: Nunito, sans-serif; // Fonte do texto
    font-size: 18px; // Tamanho da fonte
    transition: font-size 0.3s ease; // Transição suave de tamanho de fonte
  }

  &:hover,
  &:focus {
    border-radius: 15px; // Borda arredondada ao passar o mouse
    box-shadow: 0 20px 50px 20 rgba(0, 0, 0, 0.2); // Sombra ao passar o mouse
    background-color: #374bae; // Cor de fundo ao passar o mouse

    span {
      font-size: 16px; // Tamanho da fonte reduzido ao passar o mouse
      border-radius: 15px; // Borda arredondada ao passar o mouse
      box-shadow: 0 20px 50px 20 rgba(0, 0, 0, 0.2); // Sombra ao passar o mouse
      background-color: #374bae; // Cor de fundo ao passar o mouse
    }
  }

  ${(props) =>
    props.active &&
    `
    border-radius: 15px; // Borda arredondada quando ativo
    box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.2); // Sombra quando ativo
    background-color: #374bae; // Cor de fundo quando ativo
  `}
`;

// Estilização do item de logout no menu lateral
export const SidebarLogout = styled(SidebarItem)`
  margin-top: 75px; // Margem superior ajustada
  width: 270px; // Largura do item de logout
  display: flex;
  align-items: center; // Centraliza verticalmente os itens
  gap: 14px; // Espaço entre os elementos
  margin-left: 5px; // Margem à esquerda do item
margin-bottom: 15px;
  span {
    font-weight: 700; // Peso da fonte
    text-transform: uppercase; // Transformação do texto em maiúsculo
  }
`;
