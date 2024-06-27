"use strict";
import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
		await queryInterface.createTable("funcionarios", {
			id: {
				type: DataTypes.TEXT,
				primaryKey: true,
				allowNull: false,
			},
			nome: {
				type: DataTypes.TEXT,
				allowNull: false,
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
			cargoId: {
				type: DataTypes.TEXT,
				allowNull: false,
				references: {
					model: "cargos",
					key: "id",
				},
				onDelete: "RESTRICT",
				onUpdate: "CASCADE",
			},
		});

		await queryInterface.addIndex("funcionarios", ["cpf"], { unique: true });
	},

	async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
		await queryInterface.dropTable("funcionarios");
	},
};
