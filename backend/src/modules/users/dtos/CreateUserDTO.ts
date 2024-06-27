export interface CreateUserDTO {
  email: string;
  nome: string;
  cpf: string;
  telefone: string;
  status: boolean;
  senha? : string
  categoria: string;
}
