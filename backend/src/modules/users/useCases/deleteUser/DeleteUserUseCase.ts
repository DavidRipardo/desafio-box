import Usuario from "../../../../models/Usuario";
import { AppError } from "../../../../errors/AppError";
import { DeleteUserDTO } from "../../dtos/DeleteUserDTO";

export class DeleteUserUseCase {
	async execute({ id }: DeleteUserDTO): Promise<Usuario> {
		const UserExists = await Usuario.findByPk(id);

		if (!UserExists) {
			throw new AppError("Usuário não existe para deletar!");
		}
		await Usuario.destroy({
			where: {
				id,
			},
		});
		return UserExists;
	}
}
