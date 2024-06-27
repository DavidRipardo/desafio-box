import { AppError } from "../../../../errors/AppError";
import Tarefa from "../../../../models/Tarefa";

export class GetAllTasksUseCase {
	async execute(): Promise<Tarefa[]> {
		const tarefas = await Tarefa.findAll();
		if (!tarefas.length) {
			throw new AppError("Não existem tarefas na base de dados !", 204);
		}
		return tarefas;
	}
}
