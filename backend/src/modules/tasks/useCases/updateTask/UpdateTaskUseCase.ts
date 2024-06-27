import { AppError } from "../../../../errors/AppError";
import Tarefa from "../../../../models/Tarefa";
import { UpdateTaskDTO } from "../../dtos/UpdateTaskDTO";

export class UpdateTaskUseCase {
	async execute({
		id,
		descricao,
		duracao,
		status,
	}: UpdateTaskDTO): Promise<Tarefa> {
		let tarefa = await Tarefa.findOne({
			where: {
				id: id,
			},
		});

		if (!tarefa) {
			throw new AppError("Id da tarefa não existe");
		}

		await Tarefa.update({ descricao, duracao, status }, { where: { id } });
		return tarefa;
	}
}
