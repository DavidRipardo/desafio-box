import Usuario from "../../../../models/Usuario";

import { AppError } from "../../../../errors/AppError";

export class GetAllUsersUseCase {
	async execute(): Promise<Usuario[]> {
		const users = await Usuario.findAll();
		if (!users.length) {
			throw new AppError("Não existem usuários na base de dados !", 204);
		}
		return users;
	}
}
