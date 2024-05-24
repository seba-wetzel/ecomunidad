import { ClientRepository } from "@/modules/Cliente/Domain/ClientRepository";
import { Cliente } from "@/modules/Cliente/Domain/Cliente";

export const createCliente = async (
  clientRepository: ClientRepository,
  client: Cliente
) => {
  return await clientRepository.createCliente(client);
};
