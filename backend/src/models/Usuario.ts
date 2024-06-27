import { hash } from "bcrypt";
import {
	BeforeCreate,
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

@Table({ tableName: "usuarios" })
export default class Usuario extends Model {
	@PrimaryKey
	@Default(DataType.UUIDV4)
	@Column(DataType.UUID)
	declare id: string;

	@Column(DataType.STRING)
	declare nome: string;

	@Unique
	@Column(DataType.STRING)
	declare email: string;

	@Unique
	@Column(DataType.STRING)
	declare cpf: string;

	@Column(DataType.STRING)
	declare telefone: string;

	@Column(DataType.STRING)
	declare categoria: string;

	@Column(DataType.TEXT)
	declare status: 'Ativo' | 'Inativo';

	@Column(DataType.STRING)
	declare senha: string;

	@CreatedAt
	@Column(DataType.DATE)
	declare created_at: Date;

	@UpdatedAt
	@Column(DataType.DATE)
	declare updated_at: Date;

	@BeforeCreate
	static async hashPassowrd(instance: Usuario) {
		await hash(instance.senha, 10);
	}
}
