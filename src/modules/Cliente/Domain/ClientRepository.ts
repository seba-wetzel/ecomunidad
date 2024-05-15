import { Cliente } from "./Cliente";

export interface ClientRepository {
  createCliente(client: Cliente): Promise<Cliente | null>;
  getAllClientes(): Promise<Cliente[]>;
  findClienteById(id: number): Promise<Cliente | undefined>;
  findClienteByEmail(email: string): Promise<Cliente | undefined>;
  updateCliente(client: Cliente): Promise<void>;
  aproveCliente(id: number): Promise<void>;
  deleteCliente(id: number): Promise<void>;
}
