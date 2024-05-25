import { validateAddress } from "@/actions/validateAddress";
import { createCliente } from "@/modules/Cliente/Aplication/createCliente";
import { SupabaseClienteRepository } from "@/modules/Cliente/Infrastructure/SupabaseClienteRespository";
import { ClienteSchema } from "@/modules/shared/adapters/ClienteSchema.zod";

export async function POST(req: Request) {
  const form = await req.json();
  const result = ClienteSchema.safeParse(form);
  if (!result.success) {
    return Response.json({
      status: 422,
      error: result.error.errors,
    });
  }
  const validation = await validateAddress(result.data.direccion);
  try {
    if (validation.verdict.geocodeGranularity === "PREMISE") {
      const plusCode = validation.geocode.plusCode.globalCode;
      const googleValidated = true;
      const googleData = {
        address: validation.address.formattedAddress,
        geocode: validation.geocode,
      };
      const nuevoClienteData = {
        ...result.data,
        googleValidated,
        googleData,
        plusCode,
      };

      const nuevoCliente = await createCliente(
        SupabaseClienteRepository(),
        nuevoClienteData
      );
      return Response.json({
        state: "success",
        result: nuevoCliente,
      });
    }

    return Response.json({
      state: "invalidate_address",
      result: validation,
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: `Email válido", ${result.data.email}` }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
