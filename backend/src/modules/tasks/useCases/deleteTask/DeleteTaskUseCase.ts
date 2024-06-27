import Tarefa from "../../../../models/Tarefa";
import { AppError } from "../../../../errors/AppError";
import { DeleteTaskDTO } from "../../dtos/DeleteTaskDTO";

export class DeleteTaskUseCase {
	async execute({ id }: DeleteTaskDTO): Promise<Tarefa> {
		const TaskExists = await Tarefa.findOne({
			where: {
				id,
			},
		});
		if (!TaskExists) {
			throw new AppError("Tarefa não existe para deletar!");
		}
		await Tarefa.destroy({
			where: {
				id,
			},
		});
		return TaskExists;
	}
}
