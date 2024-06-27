import Cargo from "../../../../models/Cargo";
import { AppError } from "../../../../errors/AppError";


export class GetAllOfficesUseCase {
	async execute(): Promise<Cargo[]> {
		const cargos = await Cargo.findAll();

		if (!cargos.length) {
			throw new AppError("Não existem cargos na base de dados !", 204);
		}
		return cargos;
	}
}
