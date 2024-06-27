import Cliente from "../../../../models/Cliente";
import { AppError } from "../../../../errors/AppError";
import Usuario from "../../../../models/Usuario";

export class GetAllClientsUseCase {
	async execute(): Promise<Cliente[]> {
		const clientes = await Usuario.findAll({ where: { categoria: "Cliente" } });
		if (!clientes.length) {
			throw new AppError("Não existem clientes na base de dados !", 204);
		}
		return clientes;
	}
}
