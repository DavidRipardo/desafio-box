import React from "react";
import styles from "./user.module.css"; // Importa os estilos CSS específicos do módulo
import { UserTable, Navbar } from "../../components/__dashboard"; // Importa os componentes necessários

// Função para o componente TableDashboard que recebe um título como propriedade
export function TableDashboard({ title }) {
  return (
    <div className={styles.tela}> 
      {/* Contêiner principal com classe 'tela' */}
      <Navbar /> 
      {/* Componente de navegação */}
      <div className={styles.principal}>
        {/* Contêiner principal da área de conteúdo */}
        <div className={styles.cabecalho}>
          {/* Cabeçalho da área de conteúdo */}
          <h1>{title}</h1>
          {/* Título da página, passado como propriedade */}
          <div className={styles.perfil}>
            <h2>Bem vindo, Arthur!</h2>
            {/* Saudação personalizada */}
          </div>
        </div>
        <UserTable />
        {/* Componente da tabela de usuários */}
      </div>
    </div>
  );
}
