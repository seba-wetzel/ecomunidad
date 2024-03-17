import { Cliente } from "./Cliente";

export interface ClientRepository {
  createCliente(client: Cliente): Promise<void>;
  getAllClientes(): Promise<Cliente[]>;
  findClienteById(id: number): Promise<Cliente | undefined>;
  updateCliente(client: Cliente): Promise<void>;
  aproveCliente(id: number): Promise<void>;
  deleteCliente(id: number): Promise<void>;
}
