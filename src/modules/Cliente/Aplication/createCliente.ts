import { ClientRepository } from "@/modules/Cliente/Domain/ClientRepository";
import { Cliente } from "@/modules/Cliente/Domain/Cliente";

export const createCliente = async (
  clientRepository: ClientRepository,
  client: Cliente
) => {
  try {
    return await clientRepository.createCliente(client);
  } catch (error) {
    console.error("Failed to create client: ", error);
  }
};
