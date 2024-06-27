import { AppError } from "../../../../errors/AppError";
import Usuario from "../../../../models/Usuario";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
	async execute({
		nome,
		email,
		cpf,
		status,
		telefone,
		categoria,
		senha
	}: CreateUserDTO): Promise<Usuario> {
		// Verifica se o usuário já existe
		const userAlreadyExists = await Usuario.findOne({
			where: {
				cpf: cpf,
			},
		});

		if (userAlreadyExists) {
			throw new AppError("Usuário já existente!");
		}

		// Cria o user
		const user = await Usuario.create({
			nome,
			email,
			cpf,
			categoria,
			status,
			senha,
			telefone,
		});

		return user;
	}
}
