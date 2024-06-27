import { AppError } from "../../../../errors/AppError";
import Cargo from "../../../../models/Cargo";


export class GetOfficeByIdUseCase {
	async execute(officeId: string): Promise<Cargo> {
		const cargo = await Cargo.findOne({
			where: {
				id: officeId,
			},
		});
		if (!cargo) {
			throw new AppError("Cargo não encontrado");
		}
		return cargo;
	}
}
