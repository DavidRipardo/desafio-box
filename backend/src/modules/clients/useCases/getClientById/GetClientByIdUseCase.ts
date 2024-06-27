import { AppError } from "../../../../errors/AppError";
import Usuario from "../../../../models/Usuario";

export class GetClientByIdUseCase {
	async execute(clientId: string): Promise<Usuario> {
		const cliente = await Usuario.findOne({
			where: {
				id: clientId,
				categoria: "Cliente",
			},
		});
		if (!cliente) {
			throw new AppError("Cliente não encontrado");
		}
		return cliente;
	}
}
