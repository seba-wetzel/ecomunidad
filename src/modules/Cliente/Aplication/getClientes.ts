import { ClientRepository } from "@/modules/Cliente/Domain/ClientRepository";

export const getClientes = async (clientRepository: ClientRepository) => {
  try {
    // Retrieve clients from the repository
    const clientes = await clientRepository.getAllClientes();
    return clientes;
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    throw new Error("Failed to get clients: ");
  }
};
