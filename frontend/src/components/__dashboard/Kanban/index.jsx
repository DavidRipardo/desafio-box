import "../../../../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css";
import "../../../../node_modules/@syncfusion/ej2-buttons/styles/bootstrap5.css";
import "../../../../node_modules/@syncfusion/ej2-layouts/styles/bootstrap5.css";
import "../../../../node_modules/@syncfusion/ej2-dropdowns/styles/bootstrap5.css";
import "../../../../node_modules/@syncfusion/ej2-inputs/styles/bootstrap5.css";
import "../../../../node_modules/@syncfusion/ej2-popups/styles/bootstrap5.css";
import "../../../../node_modules/@syncfusion/ej2-react-kanban/styles/bootstrap5.css";

import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban"; // Importa componentes Kanban do Syncfusion
import styles from "./kanban.module.css"; // Estilos CSS para o componente
import * as React from "react";
import { Dropdown } from "primereact/dropdown"; // Componente Dropdown do PrimeReact
import { InputText } from "primereact/inputtext"; // Componente InputText do PrimeReact
import { Button } from "primereact/button"; // Componente Button do PrimeReact

export function Kanban() {
  const statusOptions = [
    { name: "Todos os Status", code: "" },
    { name: "Para fazer", code: "Para fazer" },
    { name: "Em Progresso", code: "Em Progresso" },
    { name: "Feito", code: "Feito" },
  ];

  const initialData = [
    {
      Id: 1,
      Status: "Para fazer",
      Summary: "Fazer a integração.",
      Type: "História",
      Priority: "Baixa",
      Tags: "Análise,Cliente",
      Estimate: 3.5,
      Assignee: "Nancy Davloio",
      RankId: 1,
    },
    {
      Id: 2,
      Status: "Em Progresso",
      Summary: "Corrigir os problemas relatados no navegador IE.",
    },
    {
      Id: 3,
      Status: "Feito",
      Summary: "Corrigir os problemas relatados pelo cliente.",
    },
    {
      Id: 4,
      Status: "Feito",
      Summary:
        "Arranjar uma reunião com o cliente para obter os requisitos da página de login.",
    },
  ];

  const [data, setData] = React.useState(initialData);
  const [filterText, setFilterText] = React.useState("");
  const [filterStatus, setFilterStatus] = React.useState(null);

  // Adiciona um novo item ao Kanban
  const addKanbanItem = () => {
    const newItem = {
      Id: data.length + 1,
      Status: "Para fazer",
      Summary: "Nova tarefa",
      Type: "Tarefa",
      Priority: "Média",
      Tags: "Novo",
      Estimate: 1,
      Assignee: "Novo Responsável",
      RankId: data.length + 1,
    };
    setData([...data, newItem]);
  };

  // Manipula a mudança no filtro de texto
  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  // Filtra os dados com base no status e texto digitado
  const filteredData = data.filter((item) => {
    return (
      (filterStatus === null ||
        filterStatus.code === "" ||
        item.Status === filterStatus.code) &&
      (filterText === "" ||
        item.Summary.toLowerCase().includes(filterText.toLowerCase()))
    );
  });

  return (
    <div className={styles.app}>
      {/* Componentes de ação do Kanban (PrimeReact) */}
      <div className={styles.actionsKanban}>
        <Button onClick={addKanbanItem}>Adicionar Tarefa</Button>

        <InputText
          type="text"
          placeholder="Filtrar por texto"
          onChange={handleFilterTextChange}
        >
          <span className="pi pi-search"></span>
        </InputText>

        <Dropdown
          value={filterStatus}
          onChange={(e) => {
            setFilterStatus(e.value);
          }}
          options={statusOptions}
          optionLabel="name"
          placeholder="Selecione um status"
          className="w-full md:w-14rem"
          checkmark={true}
          highlightOnSelect={false}
        />
      </div>

      {/* Componente Kanban do Syncfusion */}
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={filteredData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
      >
        <ColumnsDirective>
          <ColumnDirective headerText="Para fazer ✍️" keyField="Para fazer" />
          <ColumnDirective
            headerText="Em Progresso ⌛"
            keyField="Em Progresso"
          />
          <ColumnDirective headerText="Feito ✅" keyField="Feito" />
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
}
