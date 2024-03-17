import { db } from "../../shared/database/DB";
import { clientes } from "../../shared/database/schemas/clientesSchema";
import { ClientRepository, Cliente } from "../Domain";

export const SupabaseClienteRepository = (): ClientRepository => {
  const createCliente = async (client: Cliente) => {
    return;
  };

  const getAllClientes = async () => {
    const result = await db.select().from(clientes);
    return result as Cliente[];
  };

  const findClienteById = async (id: number) => {
    return undefined;
  };

  const updateCliente = async (client: Cliente) => {
    return;
  };

  const aproveCliente = async (id: number) => {
    return;
  };

  const deleteCliente = async (id: number) => {
    return;
  };

  return {
    createCliente,
    getAllClientes,
    findClienteById,
    updateCliente,
    aproveCliente,
    deleteCliente,
  };
};
