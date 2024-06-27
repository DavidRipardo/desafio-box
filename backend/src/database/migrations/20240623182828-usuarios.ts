"use strict";
import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
		await queryInterface.createTable("usuarios", {
			id: {
				type: DataTypes.TEXT,
				primaryKey: true,
				allowNull: false,
			},
			nome: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			email: {
				type: DataTypes.TEXT,
				allowNull: false,
				unique: true,
			},
			cpf: {
				type: DataTypes.TEXT,
				allowNull: false,
				unique: true,
			},
			telefone: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			senha: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			categoria: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			status: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			created_at: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: Sequelize.DATE(),
			},
			updated_at: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: Sequelize.DATE(),
			},
		});

		await queryInterface.addIndex("usuarios", ["email"], { unique: true });
		await queryInterface.addIndex("usuarios", ["cpf"], { unique: true });
	},

	async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
		await queryInterface.dropTable("usuarios");
	},
};
