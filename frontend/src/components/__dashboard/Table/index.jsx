import React, { useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";
import { InputMask } from "primereact/inputmask";
import { classNames } from "primereact/utils";
import styles from "./table.module.css";

// Dados de clientes fictícios
const customersData = [
  {
    id: 1,
    name: "João Batista ",
    category: "Funcionário",
    email: "joao.doe@example.com",
    phone: "(88) 99456-7890",
    status: "Ativo",
  },
  {
    id: 2,
    name: "Jane Ribeiro",
    category: "Funcionário",
    email: "jane.@example.com",
    phone: "(88) 99765-4321",
    status: "Inativo",
  },
  {
    id: 3,
    name: "Michael Brown",
    category: "Cliente",
    email: "michael.brown@example.com",
    phone: "(99) 99123-4567",
    status: "Ativo",
  },
];

export const UserTable = () => {
  const [customers, setCustomers] = useState(customersData);
  const [selectedCustomers, setSelectedCustomers] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [customerDialog, setCustomerDialog] = useState(false);
  const [deleteCustomerDialog, setDeleteCustomerDialog] = useState(false);
  const [customer, setCustomer] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const dt = useRef(null);

  // Opções de categorias para dropdown
  const categories = [
    { label: "Cliente", value: "Cliente" },
    { label: "Funcionário", value: "Funcionário" },
  ];

  // Opções de áreas de atuação para dropdown
  const areasAtuacao = [
    { label: "Gerente de produtos", value: "Gerente" },
    { label: "FullStack", value: "FullStack" },
    { label: "Frontend", value: "Frontend" },
    { label: "Backend", value: "Backend" },
    { label: "QA", value: "QA" },
  ];

  // Função para abrir o diálogo de novo cliente
  const openNew = () => {
    setCustomer({});
    setSubmitted(false);
    setCustomerDialog(true);
  };

  // Função para esconder o diálogo de cliente
  const hideDialog = () => {
    setSubmitted(false);
    setCustomerDialog(false);
  };

  // Função para esconder o diálogo de confirmação de exclusão
  const hideDeleteCustomerDialog = () => {
    setDeleteCustomerDialog(false);
  };

  // Função para salvar um cliente (novo ou editado)
  const saveCustomer = () => {
    setSubmitted(true);
    if (customer.name?.trim()) {
      let _customers = [...customers];
      let _customer = { ...customer };
      if (customer.id) {
        const index = _customers.findIndex((c) => c.id === customer.id);
        _customers[index] = _customer;
      } else {
        _customer.id = createId();
        _customers.push(_customer);
      }
      setCustomers(_customers);
      setCustomerDialog(false);
      setCustomer({});
    }
  };

  // Função para editar um cliente existente
  const editCustomer = (customer) => {
    setCustomer({ ...customer });
    setCustomerDialog(true);
  };

  // Função para confirmar a exclusão de um cliente
  const confirmDeleteCustomer = (customer) => {
    setCustomer(customer);
    setDeleteCustomerDialog(true);
  };

  // Função para excluir um cliente
  const deleteCustomer = () => {
    let _customers = customers.filter((val) => val.id !== customer.id);
    setCustomers(_customers);
    setDeleteCustomerDialog(false);
    setCustomer({});
  };

  // Função para criar um ID único para novos clientes
  const createId = () => {
    return Math.floor(Math.random() * 10000);
  };

  // Template para exibir o status do cliente na tabela
  const statusBodyTemplate = (rowData) => {
    const status = rowData.status;
    const statusStyle = {
      backgroundColor: status === "Ativo" ? "#4CAF50" : "#F44336",
      color: "#fff",
      padding: "0.5rem",
      borderRadius: "0.25rem",
      textAlign: "center",
      width: status === "Ativo" ? "4rem" : "5rem",
    };
    return (
      <div style={statusStyle}>{status === "Ativo" ? "Ativo" : "Inativo"}</div>
    );
  };

  // Template para a toolbar à esquerda
  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <Button
          label="Novo"
          icon="pi pi-plus"
          className="mr-2"
          outlined
          onClick={openNew}
        />
        <Button
          label="Exportar"
          icon="pi pi-upload"
          className="p-button"
          onClick={() => dt.current.exportCSV()}
        />
      </React.Fragment>
    );
  };

  // Template para a toolbar à direita
  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        <InputText
          type="search"
          placeholder="Buscar"
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="p-inputtext p-component"
        />
      </React.Fragment>
    );
  };

  // Template para as ações na tabela
  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded  mr-2"
          onClick={() => editCustomer(rowData)}
          outlined
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded "
          onClick={() => confirmDeleteCustomer(rowData)}
        />
      </React.Fragment>
    );
  };

  // Cabeçalho da tabela
  const header = <div className="table-header">Gerenciamento de Usuários</div>;

  // Rodapé do diálogo de cliente
  const customerDialogFooter = (
    <React.Fragment>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDialog}
      />
      <Button
        label="Salvar"
        icon="pi pi-check"
        className="p-button-text"
        onClick={saveCustomer}
      />
    </React.Fragment>
  );

  // Rodapé do diálogo de exclusão de cliente
  const deleteCustomerDialogFooter = (
    <React.Fragment>
      <Button
        label="Não"
        icon="pi pi-times"
        className="p-button-text"
        onClick={hideDeleteCustomerDialog}
      />
      <Button
        label="Sim"
        icon="pi pi-check"
        className="p-button-text"
        onClick={deleteCustomer}
      />
    </React.Fragment>
  );

  return (
    <div style={{ maxWidth: "1100px", margin: "auto" }}>
      <Toolbar
        className="mb-4"
        left={leftToolbarTemplate}
        right={rightToolbarTemplate}
      ></Toolbar>
      <DataTable
        ref={dt}
        value={customers}
        selection={selectedCustomers}
        onSelectionChange={(e) => setSelectedCustomers(e.value)}
        dataKey="id"
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} usuários"
        globalFilter={globalFilter}
        header={header}
      >
        <Column selectionMode="multiple" exportable={false}></Column>
        <Column field="name" header="Nome" sortable></Column>
        <Column field="category" header="Categoria" sortable></Column>
        <Column field="email" header="E-mail" sortable></Column>
        <Column field="phone" header="Telefone" sortable></Column>
        <Column
          field="status"
          header="Status"
          sortable
          body={statusBodyTemplate}
        ></Column>
        <Column body={actionBodyTemplate} exportable={false}></Column>
      </DataTable>

      <Dialog 
        visible={customerDialog}
        style={{ width: "60%",
          borderRadius:"50px"
         }}
        header="Detalhes do Usuário"
        className="p-fluid"
        footer={customerDialogFooter}
        onHide={hideDialog}
      >
        <div className={styles["form-grid"]}>
          <div className="p-field">
            <label htmlFor="name">Nome</label>
            <InputText
              id="name"
              value={customer.name}
              onChange={(e) =>
                setCustomer({ ...customer, name: e.target.value })
              }
              required
              autoFocus
              className={classNames({
                "p-invalid": submitted && !customer.name,
              })}
            />
            {submitted && !customer.name && (
              <small className="p-error">Nome é obrigatório.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="category">Categoria</label>
            <Dropdown
              id="category"
              value={customer.category}
              options={categories}
              onChange={(e) => setCustomer({ ...customer, category: e.value })}
              placeholder="Selecione a categoria"
              className={classNames({
                "p-invalid": submitted && !customer.category,
              })}
            />
            {submitted && !customer.category && (
              <small className="p-error">Categoria é obrigatória.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="email">E-mail</label>
            <InputText
              id="email"
              value={customer.email}
              onChange={(e) =>
                setCustomer({ ...customer, email: e.target.value })
              }
              required
              className={classNames({
                "p-invalid": submitted && !customer.email,
              })}
            />
            {submitted && !customer.email && (
              <small className="p-error">E-mail é obrigatório.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="phone">Telefone</label>
            <InputMask
              id="phone"
              mask="(99) 99999-9999"
              value={customer.phone}
              onChange={(e) => setCustomer({ ...customer, phone: e.value })}
              placeholder="(99) 99999-9999"
              className={classNames({
                "p-invalid": submitted && !customer.phone,
              })}
            />
            {submitted && !customer.phone && (
              <small className="p-error">Telefone é obrigatório.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="status">Status</label>
            <Dropdown
              id="status"
              value={customer.status}
              options={[
                { label: "Ativo", value: "Ativo" },
                { label: "Inativo", value: "Inativo" },
              ]}
              onChange={(e) => setCustomer({ ...customer, status: e.value })}
              placeholder="Selecione o status"
              className={classNames({
                "p-invalid": submitted && !customer.status,
              })}
            />
            {submitted && !customer.status && (
              <small className="p-error">Status é obrigatório.</small>
            )}
          </div>
          <div className="p-field">
            <label htmlFor="areaAtuacao">Área de Atuação</label>
            <Dropdown
              id="areaAtuacao"
              value={customer.areaAtuacao}
              options={areasAtuacao}
              onChange={(e) =>
                setCustomer({ ...customer, areaAtuacao: e.value })
              }
              placeholder="Selecione a área de atuação"
            />
          </div>
          <div className="p-field">
            <label htmlFor="cpf">CPF</label>
            <InputMask
              id="cpf"
              mask="999.999.999-99"
              value={customer.cpf}
              type="text"
              onChange={(e) => setCustomer({ ...customer, cpf: e.value })}
              placeholder="CPF"
              className={classNames({
                "p-invalid": submitted && !customer.cpf,
              })}
            />
          </div>
          <div className="p-field">
            <label htmlFor="senha">Senha</label>
            <Password
              id="senha"
              value={customer.senha}
              onChange={(e) =>
                setCustomer({ ...customer, senha: e.target.value })
              }
              toggleMask
              feedback={false}
              placeholder="Senha"
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        visible={deleteCustomerDialog}
        style={{ width: "500px" }}
        header="Confirmar"
        modal
        footer={deleteCustomerDialogFooter}
        onHide={hideDeleteCustomerDialog}
      >
        <div className="confirmation-content">
          <i
            className="pi pi-exclamation-triangle p-mr-3"
            style={{ fontSize: "2rem" }}
          />
          {customer && (
            <span>
              Tem certeza que deseja deletar <b>{customer.name}</b>?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
};
