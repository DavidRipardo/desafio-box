import {
	Column,
	CreatedAt,
	DataType,
	Default,
	Model,
	PrimaryKey,
	Table,
	Unique,
	UpdatedAt,
} from "sequelize-typescript";

@Table({ tableName: "clientes" })
export default class Cliente extends Model {
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
}
