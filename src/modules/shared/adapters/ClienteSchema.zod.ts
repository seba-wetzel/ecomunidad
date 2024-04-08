import { Cliente } from "@/modules/Cliente/Domain/Cliente";
import { Direccion } from "@/modules/Cliente/Domain/Direccion";
import { TipoCliente } from "@/modules/Cliente/Domain/TipoCliente";
import { z, ZodType } from "zod";

export const DireccionSchema: ZodType<Direccion> = z
  .object({
    calle: z.string().refine((value) => value.length > 0, {
      message: "La calle no puede estar vacía",
    }),
    barrio: z.string(),
    localidad: z.string(),
    numero: z.coerce.number().refine((value) => value, {
      message: "Debe ingresar un número de calle",
    }),
    piso: z.coerce.number(),
    entreCalles: z.object({
      calle1: z.string(),
      calle2: z.string(),
    }),
  })
  .required({
    calle: true,
    numero: true,
  });

const TiposCliente: [TipoCliente, TipoCliente] = ["residencial", "comercial"];
export const ClienteSchema: ZodType<Cliente> = z
  .object({
    nombre: z.string().refine((value) => value.length > 0, {
      message: "El nombre no puede estar vacío",
    }),
    apellido: z.string().refine((value) => value.length > 0, {
      message: "El apellido no puede estar vacío",
    }),
    email: z.string().email(),
    telefono: z.string().refine((value) => value.length > 0, {
      message: "El teléfono no puede estar vacío",
    }),
    direccion: DireccionSchema,
    fechaRegistro: z.date(),
    tipoCliente: z.enum(TiposCliente),
    cuit: z.number().nullable(),
  })
  .refine((value) => value.tipoCliente === "comercial", {
    message: "El cuit es obligatorio para clientes comerciales",
  });

export const DireccionDefaultValues = {
  calle: "",
  barrio: "",
  numero: 0,
  piso: 0,
  entreCalles: {
    calle1: "",
    calle2: "",
  },
};

export const ClienteDefaultValues = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  tipoCliente: "residencial",
  cuit: null,
  fechaRegistro: new Date(),
  direccion: DireccionDefaultValues,
};
