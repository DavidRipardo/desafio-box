import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";
import Usuario from "../../../../models/Usuario";
import { LoginDTO } from "../../dtos/LoginDTO";

export class AuthUseCase {
	async execute({ email, senha }: LoginDTO) {
		const user = await Usuario.findOne({ where: { email } });

		if (!user) {
			throw new Error("Invalid email or password");
		}

		const isPasswordValid = await compare(senha, user.senha);

		if (!isPasswordValid) {
			throw new AppError("Senha inválida", 401);
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
			expiresIn: "1h",
		});

		return {
			user,
			token,
		};
	}
}
