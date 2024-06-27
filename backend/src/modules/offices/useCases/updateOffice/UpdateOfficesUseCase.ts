import { AppError } from "../../../../errors/AppError";
import Cargo from "../../../../models/Cargo";
import { UpdateOfficeDTO } from "../../dtos/UpdateOfficeDTO";

export class UpdateOfficeUseCase {
	async execute({ id, descricao }: UpdateOfficeDTO): Promise<Cargo> {
		console.log("id", id);
		let cargo = await Cargo.findOne({
			where: {
				id: id,
			},
		});

		console.log("cargoExists", cargo);

		if (!cargo) {
			throw new AppError("Id do Cargo não existe");
		}

		cargo = await cargo.update(
			{
				descricao,
			},
			{
				where: {
					id,
				},
			},
		);
		return cargo;
	}
}
