import Cliente from "../../../../models/Cliente";
import { AppError } from "../../../../errors/AppError";
import { DeleteClientDTO } from "../../dtos/DeleteClientDTO";
import Usuario from "../../../../models/Usuario";

export class DeleteClientUseCase {
	async execute({ id }: DeleteClientDTO): Promise<Cliente> {
		const ClientExists = await Usuario.findOne({
			where: {
				id,
				categoria: 'Cliente'
			},
		});
		if (!ClientExists) {
			throw new AppError("Cliente não existe para deletar!");
		}
		await Cliente.destroy({
			where: {
				id,
			},
		});
		return ClientExists;
	}
}
