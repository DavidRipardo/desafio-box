import { AppError } from "../../../../errors/AppError";
import Usuario from "../../../../models/Usuario";
import { UpdateUserDTO } from "../../dtos/UpdateUserDTO";

export class UpdateUserUseCase {
	async execute({
		id,
		categoria,
		cpf,
		email,
		nome,
		status,
		telefone,
	}: UpdateUserDTO): Promise<Usuario> {
		let user = await Usuario.findOne({
			where: {
				id,
			},
		});

		if (!user) {
			throw new AppError("Id do usuário não existe");
		}

		await Usuario.update(
			{
				categoria,
				cpf,
				email,
				nome,
				status,
				telefone,
			},
			{
				where: {
					id: id,
				},
			},
		);

		return user;
	}
}
