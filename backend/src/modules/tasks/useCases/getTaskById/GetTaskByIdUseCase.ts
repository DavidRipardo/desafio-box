import Tarefa from "../../../../models/Tarefa";

export class GetTaskByIdUseCase {
	async execute(taskId: string): Promise<Tarefa> {
		const tarefa = await Tarefa.findOne({
			where: {
				id: taskId,
			},
		});
		if (!tarefa) {
			throw new Error("Tarefa não encontrada");
		}
		return tarefa;
	}
}
