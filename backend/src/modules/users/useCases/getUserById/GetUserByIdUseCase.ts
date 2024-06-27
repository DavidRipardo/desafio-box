import Usuario from "../../../../models/Usuario";

export class GetUserByIdUseCase {
	async execute(usuarioId: string): Promise<Usuario> {
		const usuario = await Usuario.findByPk(usuarioId);
		if (!usuario) {
			throw new Error("usuário não encontrado");
		}
		return usuario;
	}
}
