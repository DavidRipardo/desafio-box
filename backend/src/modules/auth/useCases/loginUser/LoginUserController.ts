import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { AuthUseCase } from "./LoginUserUseCase";

export class LoginUserController {
	async handle(req: Request, res: Response) {
		const { email, senha } = req.body;

		if (!email || !senha) {
			throw new AppError("Insira o email e a senha", 400);
		}

		const authUseCase = new AuthUseCase();

		const result = await authUseCase.execute({ email, senha });
		return res.status(200).json(result);
	}
}
