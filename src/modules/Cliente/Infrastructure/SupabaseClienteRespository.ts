import { eq } from "drizzle-orm";
import { db } from "../../shared/database/DB";
import {
  clientes,
  type NuevoCliente,
} from "../../shared/database/schemas/clientesSchema";
import { ClientRepository, Cliente } from "../Domain";

export const SupabaseClienteRepository = (): ClientRepository => {
  const createCliente = async (client: Cliente) => {
    const nuevoCliente = await db
      .insert(clientes)
      .values(client as NuevoCliente)
      .returning();
    return nuevoCliente as unknown as Cliente;
  };

  const getAllClientes = async () => {
    const result = await db.select().from(clientes);
    return result as Cliente[];
  };

  const findClienteById = async (id: number) => {
    return undefined;
  };

  const findClienteByEmail = async (email: string) => {
    const result = await db
      .select()
      .from(clientes)
      .where(eq(clientes.email, email));
    return result[0] as unknown as Cliente;
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
    findClienteByEmail,
    updateCliente,
    aproveCliente,
    deleteCliente,
  };
};
