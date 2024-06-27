import Tarefa from "../../../../models/Tarefa";;
import { CreateTaskDTO } from "../../dtos/CreateTaskDTO";

export class CreateTaskUseCase {
	async execute({
		descricao,
		duracao,
		status,
	}: CreateTaskDTO): Promise<Tarefa> {
		const task = await Tarefa.create({
			descricao,
			status,
			duracao,
		});
		return task;
	}
}
