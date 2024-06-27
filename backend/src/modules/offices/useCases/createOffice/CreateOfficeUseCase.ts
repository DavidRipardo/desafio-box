import { AppError } from "../../../../errors/AppError";
import Cargo from "../../../../models/Cargo";
import { CreateOfficeDTO } from "../../dtos/CreateOfficeDTO";

export class CreateOfficeUseCase {
	async execute({ descricao }: CreateOfficeDTO): Promise<Cargo> {
		const cargoAlreadyExists = await Cargo.findOne({
			where: {
				descricao: descricao,
			},
			include: ["Funcionario"],
		});
		if (cargoAlreadyExists) {
			throw new AppError("Cargo já existente!");
		}
		const office = await Cargo.create({
			descricao,
		});

		return office;
	}
}
