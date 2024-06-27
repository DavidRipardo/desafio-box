import {
	Column,
	CreatedAt,
	DataType,
	Default,
	HasMany,
	Model,
	PrimaryKey,
	Table,
	UpdatedAt,
} from "sequelize-typescript";
import Funcionario from "./Funcionario";

@Table({ tableName: "cargos" })
export default class Cargo extends Model {
	@PrimaryKey
	@Default(DataType.UUIDV4)
	@Column(DataType.UUID)
	declare id: string;

	@Column(DataType.STRING)
	declare descricao: string;

	@CreatedAt
	@Column(DataType.DATE)
	declare created_at: Date;

	@UpdatedAt
	@Column(DataType.DATE)
	declare updated_at: Date;

	@HasMany(() => Funcionario)
	declare funcionarios: Funcionario[];
}
