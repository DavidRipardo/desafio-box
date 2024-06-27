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
} from "@syncfusion/ej2-react-kanban";
import styles from "./kanban.module.css";
import * as React from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import {
	createTask,
	deleteTask as deleteTaskApi,
	getTasks,
	updateTask,
} from "../../../services/api-tasks";

export function Kanban() {
	const statusOptions = [
		{ name: "Para fazer", code: "Para fazer" },
		{ name: "Fazendo", code: "Fazendo" },
		{ name: "Feito", code: "Feito" },
	];

	const [data, setData] = React.useState([]);
	const [filterText, setFilterText] = React.useState("");
	const [filterStatus, setFilterStatus] = React.useState(null);
	const [selectedTask, setSelectedTask] = React.useState(null);
	const [isDialogVisible, setIsDialogVisible] = React.useState(false);

	React.useEffect(() => {
		fetchTasks();
	}, []);

	const fetchTasks = async () => {
		try {
			const response = await getTasks();
			setData(response.data);
		} catch (error) {
			console.error("Erro ao buscar tarefas:", error);
		}
	};

	const addKanbanItem = () => {
		setSelectedTask({
			descricao: "",
			status: "Para fazer",
			duracao: new Date().toISOString().slice(0, 16),
		});
		setIsDialogVisible(true);
	};

	const saveTask = async () => {
		if (selectedTask.id) {
			try {
				setData(
					data.map((task) =>
						task.id === selectedTask.id ? selectedTask : task,
					),
				);
				await updateTask(selectedTask.id, selectedTask);
			} catch (error) {
				console.error("Erro ao atualizar tarefa:", error);
			}
		} else {
			try {
				const response = await createTask(selectedTask);
				setData([...data, response.data]);
			} catch (error) {
				console.error("Erro ao adicionar tarefa:", error);
			}
		}
		setIsDialogVisible(false);
	};

	const deleteTask = async (taskId) => {
		try {
			await deleteTaskApi(taskId);
			setData(data.filter((task) => task.id !== taskId));
			setIsDialogVisible(false);
		} catch (error) {
			console.error("Erro ao deletar tarefa:", error);
		}
	};

	const handleFilterTextChange = (event) => {
		setFilterText(event.target.value);
	};

	const editTask = (task) => {
		setSelectedTask({
			...task,
			duracao: new Date(task.duracao).toISOString().slice(0, 16),
		});
		setIsDialogVisible(true);
	};

	const filteredData = Array.isArray(data)
		? data.filter((item) => {
				return (
					(filterStatus === null ||
						filterStatus.code === "" ||
						item.status === filterStatus.code) &&
					(filterText === "" ||
						item.descricao.toLowerCase().includes(filterText.toLowerCase()))
				);
			})
		: [];

	return (
		<div className={styles.app}>
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

			<KanbanComponent
				id="kanban"
				keyField="status"
				dataSource={filteredData}
				cardSettings={{ contentField: "descricao", headerField: "id" }}
				cardDoubleClick={(e) => editTask(e.data)}
				allowDragAndDrop={false}
				dialogOpen={false}
			>
				<ColumnsDirective>
					<ColumnDirective headerText="Para fazer ✍️" keyField="Para fazer" />
					<ColumnDirective headerText="Fazendo ⌛" keyField="Fazendo" />
					<ColumnDirective headerText="Feito ✅" keyField="Feito" />
				</ColumnsDirective>
			</KanbanComponent>

			<Dialog
				header="Tarefa"
				visible={isDialogVisible}
				onHide={() => setIsDialogVisible(false)}
			>
				<div className="p-fluid">
					<div className="p-field">
						<label htmlFor="descricao">Descrição</label>
						<InputText
							id="descricao"
							value={selectedTask?.descricao}
							onChange={(e) =>
								setSelectedTask({ ...selectedTask, descricao: e.target.value })
							}
						/>
					</div>
					<div className="p-field">
						<label htmlFor="status">Status</label>
						<Dropdown
							id="status"
							value={selectedTask?.status}
							options={statusOptions}
							optionLabel="name"
							onChange={(e) =>
								setSelectedTask({ ...selectedTask, status: e.value.code })
							}
						/>
					</div>
					<div className="p-field">
						<label htmlFor="duracao">Duração</label>
						<InputText
							id="duracao"
							type="datetime-local"
							value={selectedTask?.duracao}
							onChange={(e) =>
								setSelectedTask({ ...selectedTask, duracao: e.target.value })
							}
						/>
					</div>
				</div>
				<div className="p-d-flex p-jc-end">
					<Button
						label="Cancelar"
						onClick={() => setIsDialogVisible(false)}
						className="p-button-text"
					/>
					<Button label="Salvar" onClick={saveTask} className="p-button" />
					{selectedTask?.id && (
						<Button
							label="Excluir"
							onClick={() => deleteTask(selectedTask.id)}
							className="p-button-danger"
						/>
					)}
				</div>
			</Dialog>
		</div>
	);
}
