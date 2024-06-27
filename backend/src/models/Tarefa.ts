import {
	Column,
	CreatedAt,
	DataType,
	Default,
	Model,
	PrimaryKey,
	Table,
	UpdatedAt,
} from "sequelize-typescript";

@Table({ tableName: "tarefas" })
export default class Tarefa extends Model {
	@PrimaryKey
	@Default(DataType.UUIDV4)
	@Column(DataType.UUID)
	declare id: string;

	@Column(DataType.STRING)
	declare descricao: string;

	@Column(DataType.STRING)
	declare status: string;

	@Column(DataType.DATE)
	declare duracao: Date;

	@CreatedAt
	@Column(DataType.DATE)
	declare created_at: Date;

	@UpdatedAt
	@Column(DataType.DATE)
	declare updated_at: Date;
}
