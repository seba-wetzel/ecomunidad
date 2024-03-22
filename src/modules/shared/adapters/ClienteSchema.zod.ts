import { Cliente } from "@/modules/Cliente/Domain/Cliente";
import { Direccion } from "@/modules/Cliente/Domain/Direccion";
import { z, ZodType } from "zod";

const DireccionSchema: ZodType<Direccion> = z.object({
  calle: z.string(),
  barrio: z.string(),
  numero: z.number(),
  piso: z.number().nullable(),
  entreCalles: z.object({
    calle1: z.string(),
    calle2: z.string(),
  }),
});

const ClienteSchema: ZodType<Cliente> = z.object({
  nombre: z.string(),
  apellido: z.string(),
  email: z.string().email(),
  telefono: z.string(),
  direccion: DireccionSchema,
  fechaRegistro: z.date(),
});

export type ClienteData = z.infer<typeof ClienteSchema>;
