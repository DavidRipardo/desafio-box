import Cargo from "../../../../models/Cargo";
import { AppError } from "../../../../errors/AppError";
import { DeleteOfficeDTO } from "../../dtos/DeleteOfficeDTO";

export class DeleteOfficeUseCase {
	async execute({ id }: DeleteOfficeDTO): Promise<Cargo> {
		const CargoExists = await Cargo.findOne({
			where: {
				id,
			},
		});

		if (!CargoExists) {
			throw new AppError("Cargo não existe para deletar!");
		}

		await Cargo.destroy({
			where: {
				id,
			},
		});
		return CargoExists;
	}
}
