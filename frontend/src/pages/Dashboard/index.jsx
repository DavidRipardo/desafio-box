// Importa o React
import React from "react";

// Importa os estilos do componente Dashboard
import styles from "./dashboard.module.css";

// Importa os componentes CardStatus, TaskCard e Navbar do diretório __dashboard
import { CardStatus, TaskCard, Navbar } from "../../components/__dashboard";

// Exporta a função Dashboard
export function Dashboard() {
  // Retorna o JSX do componente Dashboard
  return (
    // Div com a classe tela, que define o layout da tela
    <div className={styles.tela}>
      <Navbar />
      <main>
        <div className={styles.cabecalho}>
          <h1>Monitoramento</h1>
          <div className={styles.perfil}>
            <h2>Bem vindo, Arthur!</h2>
          </div>
        </div>
        <CardStatus />
        <TaskCard />
      </main>
    </div>
  );
}
