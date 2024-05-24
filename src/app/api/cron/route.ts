import { getClientes } from "@/modules/Cliente/Aplication/";
import { SupabaseClienteRepository } from "@/modules/Cliente/Infrastructure/SupabaseClienteRespository";
import { NextApiResponse } from "next";

export async function GET(req: Request, res: NextApiResponse) {
  if (
    req.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return res.status(401);
  }
  const _clientes = await getClientes(SupabaseClienteRepository());
  return res.json({ ok: true });
}
