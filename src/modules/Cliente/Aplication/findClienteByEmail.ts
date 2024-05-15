import { ClientRepository } from "@/modules/Cliente/Domain/ClientRepository";

export const findClienteByEmail = async (
  clientRepository: ClientRepository,
  email: string
) => {
  try {
    return await clientRepository.findClienteByEmail(email);
  } catch (error) {
    console.error("Failed to find client by email: ", error);
  }
};
