import {
	BelongsTo,
	Column,
	CreatedAt,
	DataType,
	Default,
	ForeignKey,
	Model,
	PrimaryKey,
	Table,
	Unique,
	UpdatedAt,
} from "sequelize-typescript";
import Cargo from "./Cargo";

@Table({ tableName: "funcionarios" })
export default class Funcionario extends Model<Funcionario> {
	@PrimaryKey
	@Default(DataType.UUIDV4)
	@Column(DataType.UUID)
	declare id: string;

	@Column(DataType.STRING)
	declare nome: string;

	@Unique
	@Column(DataType.STRING)
	declare cpf: string;

	@Column(DataType.STRING)
	declare telefone: string;

	@CreatedAt
	@Column(DataType.DATE)
	declare created_at: Date;

	@UpdatedAt
	@Column(DataType.DATE)
	declare updated_at: Date;

	@ForeignKey(() => Cargo)
	@Column(DataType.UUID)
	declare cargoId: string;

	@BelongsTo(() => Cargo)
	declare cargo: Cargo;
}
