import { getClientes } from "@/modules/Cliente/Aplication/";
import { SupabaseClienteRepository } from "@/modules/Cliente/Infrastructure/SupabaseClienteRespository";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }
  const _clientes = await getClientes(SupabaseClienteRepository());
  return Response.json({ success: true });
}
