"use strict";
import { hash } from "bcrypt";
import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
		await queryInterface.bulkInsert(
			"usuarios",
			[
				{
					id: "1",
					email: "joao.silva@example.com",
					cpf: "12345678901",
					telefone: "11987654321",
					nome: "João Silva",
					categoria: "Cliente",
					status: 'Inativo',
					senha: await hash("senha123", 10),
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					id: "2",
					email: "maria.souza@example.com",
					cpf: "23456789012",
					telefone: "21987654321",
					nome: "Maria Souza",
					categoria: "Cliente",
					status: 'Inativo',
					senha: await hash("senha123", 10),
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					id: "3",
					email: "carlos.pereira@example.com",
					cpf: "34567890123",
					telefone: "31987654321",
					nome: "Carlos Pereira",
					categoria: "Cliente",
					status: 'Ativo',
					senha: await hash("senha123", 10),
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					id: "4",
					email: "ana.oliveira@example.com",
					cpf: "45678901234",
					telefone: "41987654321",
					nome: "Ana Oliveira",
					categoria: "Funcionário",
					status: 'Inativo',
					senha: await hash("senha123", 10),
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
		await queryInterface.bulkDelete("usuarios", [], {});
	},
};
