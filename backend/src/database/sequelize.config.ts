import { join, resolve } from "path";
import { Sequelize } from "sequelize-typescript";


const modelsPath = resolve('src', 'models')
const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: resolve("src", "database", "dev.db"),
	query: {
		raw: true,
	},
	models: [modelsPath],
});

export async function ConnectDatabase() {
	try {
		await sequelize.authenticate();
		console.log("Banco de dados ok ✅");
	} catch (error) {
		console.error(`Erro de conexão : ${error}`);
	}
}
