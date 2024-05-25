"use server";
import { findClienteByEmail } from "@/modules/Cliente/Aplication/findClienteByEmail";

import { SupabaseClienteRepository } from "@/modules/Cliente/Infrastructure/SupabaseClienteRespository";

export const validateEmail = async (email: string) => {
  const cliente = await findClienteByEmail(SupabaseClienteRepository(), email);
  return cliente ? false : true;
};
