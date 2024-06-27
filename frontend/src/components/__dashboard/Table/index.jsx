import React, { useState, useRef, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
} from "../../../services/api-users";

export const UserTable = () => {
	const [customers, setCustomers] = useState([]);
	const [selectedCustomers, setSelectedCustomers] = useState(null);
	const [globalFilter, setGlobalFilter] = useState(null);
	const [customerDialog, setCustomerDialog] = useState(false);
	const [deleteCustomerDialog, setDeleteCustomerDialog] = useState(false);
	const [customer, setCustomer] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const dt = useRef(null);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await getUsers();
			setCustomers(response.data);
		} catch (error) {
			console.error("Erro ao buscar usuários:", error);
		}
	};

	const categories = [
		{ label: "Cliente", value: "Cliente" },
		{ label: "Funcionário", value: "Funcionário" },
	];

	const openAddDialog = () => {
		setCustomer({});
		setSubmitted(false);
		setCustomerDialog(true);
	};

	const openEditDialog = (customer) => {
		setCustomer({ ...customer });
		setSubmitted(false);
		setCustomerDialog(true);
	};

	const hideDialog = () => {
		setSubmitted(false);
		setCustomerDialog(false);
	};

	const hideDeleteCustomerDialog = () => {
		setDeleteCustomerDialog(false);
	};

	const saveCustomer = async () => {
		setSubmitted(true);
		if (validateCustomer()) {
			try {
				let _customers = [...customers];
				let _customer = { ...customer };

				if (_customer.id) {
					await updateUser(_customer.id, _customer);
					const index = _customers.findIndex((c) => c.id === _customer.id);
					_customers[index] = _customer;
				} else {
					const response = await createUser(_customer);
					_customer.id = response.data.id;
					_customers.push(_customer);
				}

				setCustomers(_customers);
				setCustomerDialog(false);
				setCustomer({});
			} catch (error) {
				console.error("Erro ao salvar usuário:", error);
			}
		}
	};

	const validateCustomer = () => {
		if (
			!customer.nome ||
			!customer.categoria ||
			!customer.email ||
			!customer.telefone ||
			!customer.cpf ||
			customer.status == null ||
			(!customer.id && !customer.senha)
		) {
			return false;
		}
		return true;
	};

	const confirmDeleteCustomer = (customer) => {
		setCustomer(customer);
		setDeleteCustomerDialog(true);
	};

	const deleteCustomer = async () => {
		try {
			await deleteUser(customer.id);
			let _customers = customers.filter((val) => val.id !== customer.id);
			setCustomers(_customers);
			setDeleteCustomerDialog(false);
			setCustomer({});
		} catch (error) {
			console.error("Erro ao deletar usuário:", error);
		}
	};

	const statusBodyTemplate = (rowData) => {
		const status = rowData.status;
		const statusStyle = {
			backgroundColor: status === "Ativo" ? "#4CAF50" : "#F44336",
			color: "#fff",
			padding: "0.5rem",
			borderRadius: "0.25rem",
			textAlign: "center",
			width: "4rem",
		};
		return <div style={statusStyle}>{status}</div>;
	};

	const leftToolbarTemplate = () => {
		return (
			<React.Fragment>
				<Button
					label="Novo"
					icon="pi pi-plus"
					className="mr-2"
					outlined
					onClick={openAddDialog}
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

	const actionBodyTemplate = (rowData) => {
		return (
			<React.Fragment>
				<Button
					icon="pi pi-pencil"
					className="p-button-rounded  mr-2"
					onClick={() => openEditDialog(rowData)}
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

	const header = <div className="table-header">Gerenciamento de Usuários</div>;

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
				<Column field="nome" header="Nome" sortable></Column>
				<Column field="cpf" header="CPF" sortable></Column>
				<Column field="categoria" header="Categoria" sortable></Column>
				<Column field="email" header="E-mail" sortable></Column>
				<Column field="telefone" header="Telefone" sortable></Column>
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
				style={{ width: "60%", borderRadius: "50px" }}
				header={customer.id ? "Editar Usuário" : "Adicionar Usuário"}
				className="p-fluid"
				footer={customerDialogFooter}
				onHide={hideDialog}
			>
				<div className="field">
					<label htmlFor="name">Nome</label>
					<InputText
						id="name"
						value={customer.nome || ""}
						onChange={(e) => setCustomer({ ...customer, nome: e.target.value })}
						required
						className={classNames({ "p-invalid": submitted && !customer.nome })}
					/>
					{submitted && !customer.nome && (
						<small className="p-error">Nome é obrigatório.</small>
					)}
				</div>
				<div className="field">
					<label htmlFor="cpf">CPF</label>
					<InputMask
						id="cpf"
						value={customer.cpf || ""}
						mask="999.999.999-99"
						onChange={(e) => setCustomer({ ...customer, cpf: e.target.value })}
						required
						className={classNames({ "p-invalid": submitted && !customer.cpf })}
					/>
					{submitted && !customer.cpf && (
						<small className="p-error">CPF é obrigatório.</small>
					)}
				</div>
				<div className="field">
					<label htmlFor="categoria">Categoria</label>
					<Dropdown
						id="categoria"
						value={customer.categoria || ""}
						options={categories}
						onChange={(e) =>
							setCustomer({ ...customer, categoria: e.target.value })
						}
						required
						className={classNames({
							"p-invalid": submitted && !customer.categoria,
						})}
					/>
					{submitted && !customer.categoria && (
						<small className="p-error">Categoria é obrigatória.</small>
					)}
				</div>
				<div className="field">
					<label htmlFor="email">E-mail</label>
					<InputText
						id="email"
						value={customer.email || ""}
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
				<div className="field">
					<label htmlFor="telefone">Telefone</label>
					<InputMask
						id="telefone"
						value={customer.telefone || ""}
						mask="(99) 99999-9999"
						onChange={(e) =>
							setCustomer({ ...customer, telefone: e.target.value })
						}
						required
						className={classNames({
							"p-invalid": submitted && !customer.telefone,
						})}
					/>
					{submitted && !customer.telefone && (
						<small className="p-error">Telefone é obrigatório.</small>
					)}
				</div>
				{!customer.id && (
					<div className="field">
						<label htmlFor="senha">Senha</label>
						<Password
							id="senha"
							name="senha"
							value={customer.senha || ""}
							onChange={(e) =>
								setCustomer({ ...customer, senha: e.target.value })
							}
							toggleMask
							feedback={false}
							className={classNames({
								"p-invalid": submitted && !customer.senha,
							})}
						/>
						{submitted && !customer.senha && (
							<small className="p-error">Senha é obrigatória.</small>
						)}
					</div>
				)}
				<div className="field">
					<label htmlFor="status">Status</label>
					<Dropdown
						id="status"
						value={customer.status || ""}
						options={[
							{ label: "Ativo", value: "Ativo" },
							{ label: "Inativo", value: "Inativo" },
						]}
						onChange={(e) =>
							setCustomer({ ...customer, status: e.target.value })
						}
						required
						className={classNames({
							"p-invalid": submitted && customer.status == null,
						})}
					/>
					{submitted && customer.status == null && (
						<small className="p-error">Status é obrigatório.</small>
					)}
				</div>
			</Dialog>

			<Dialog
				visible={deleteCustomerDialog}
				style={{ width: "450px", borderRadius: "50px" }}
				header="Confirmar"
				modal
				footer={deleteCustomerDialogFooter}
				onHide={hideDeleteCustomerDialog}
			>
				<div className="confirmation-content">
					<i
						className="pi pi-exclamation-triangle mr-3"
						style={{ fontSize: "2rem" }}
					/>
					{customer && (
						<span>
							Tem certeza que deseja deletar o usuário <b>{customer.nome}</b>?
						</span>
					)}
				</div>
			</Dialog>
		</div>
	);
};

export default UserTable;
