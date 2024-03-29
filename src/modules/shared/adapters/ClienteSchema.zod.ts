import { Cliente } from "@/modules/Cliente/Domain/Cliente";
import { Direccion } from "@/modules/Cliente/Domain/Direccion";
import { z, ZodType } from "zod";

export const DireccionSchema: ZodType<Direccion> = z
  .object({
    calle: z.string().refine((value) => value.length > 0, {
      message: "La calle no puede estar vacía",
    }),
    barrio: z.string(),
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

export const ClienteSchema: ZodType<Cliente> = z.object({
  nombre: z.string().refine((value) => value.length > 0, {
    message: "El nombre no puede estar vacío",
  }),
  apellido: z.string().refine((value) => value.length > 0, {
    message: "El apellido no puede estar vacío",
  }),
  email: z.string().email(),
  telefono: z.string(),
  direccion: DireccionSchema,
  fechaRegistro: z.date(),
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
  fechaRegistro: new Date(),
  direccion: DireccionDefaultValues,
};
