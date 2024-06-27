import React from "react";
import styles from "./tarefas.module.css"; // Importa os estilos CSS específicos do módulo
import { Kanban, Navbar } from "../../components/__dashboard"; // Importa os componentes necessários

// Função para o componente Tarefas
export function Tarefas() {
  return (
    <div className={styles.tela}>
      {/* Contêiner principal com classe 'tela' */}
      <Navbar />
      {/* Componente de navegação */}
      <div className={styles.principal}>
        {/* Contêiner principal da área de conteúdo */}
        <div className={styles.cabecalho}>
          {/* Cabeçalho da área de conteúdo */}
          <h1>Usuários</h1>
          {/* Título da seção */}
          <div className={styles.perfil}>
            <h2>Bem vindo, Arthur!</h2>
            {/* Saudação personalizada */}
          </div>
        </div>
        <Kanban />
        {/* Componente do Kanban */}
      </div>
    </div>
  );
}
