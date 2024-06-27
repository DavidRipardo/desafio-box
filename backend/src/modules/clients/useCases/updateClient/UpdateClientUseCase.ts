import { AppError } from "../../../../errors/AppError";
import Cliente from "../../../../models/Cliente";
import Usuario from "../../../../models/Usuario";
import { UpdateClientDTO } from "../../dtos/UpdateClientDTO";

export class UpdateClientUseCase {
	async execute({
		id,
		cpf,
		nome,
		telefone,
	}: UpdateClientDTO): Promise<Usuario> {
		let client = await Usuario.findOne({
			where: {
				id: id,
				categoria: "Cliente",
			},
		});

		if (!client) {
			throw new AppError("Id do cliente não existe", 404);
		}

		client = await client.update(
			{ cpf, nome, telefone },
			{
				where: {
					cpf,
				},
			},
		);

		return client;
	}
}
