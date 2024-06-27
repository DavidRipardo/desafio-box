import React, { useEffect } from 'react';
import {
  TaskStatCard,
  TaskStatCount,
  TaskStatDescription,
  TaskStatIcon,
  TaskStatInfo,
  TaskStatTitle,
  TaskStatsGrid,
} from "./styles";
import AOS from 'aos';
import 'aos/dist/aos.css';
import imgcardtarefas from "/src/assets/tarefascard.png";
import imgcardAndamento from "/src/assets/andamentocard.png";
import imgcardfinish from "/src/assets/finalizadascard.png";

export function TaskCard() {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duração da animação em milissegundos
    });
  }, []);

  const taskStats = [
    {
      count: 18,
      title: "Tarefas",
      description: "Lista de tarefas requisitadas",
      icon: imgcardtarefas,
      animation: "zoom-in", // Animação específica para este card
    },
    {
      count: 11,
      title: "Tarefas finalizadas",
      description: "Lista de tarefas finalizadas",
      icon: imgcardAndamento,
      animation: "flip-left", // Animação específica para este card
    },
    {
      count: 7,
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
