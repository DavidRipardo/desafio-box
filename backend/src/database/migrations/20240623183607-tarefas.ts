"use strict";
import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
		await queryInterface.createTable("tarefas", {
			id: {
				type: DataTypes.TEXT,
				primaryKey: true,
				allowNull: false,
			},
			descricao: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			status: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			duracao: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			created_at: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: Sequelize.DATE,
			},
			updated_at: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: Sequelize.DATE,
			},
		});
	},

	async down(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
		await queryInterface.dropTable("tarefas");
	},
};
