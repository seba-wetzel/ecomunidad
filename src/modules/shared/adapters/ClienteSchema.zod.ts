import { Cliente } from "@/modules/Cliente/Domain/Cliente";
import { Direccion } from "@/modules/Cliente/Domain/Direccion";
import { DiaDePreferencia } from "@/modules/Cliente/Domain/Preferencia";
import { TipoCliente } from "@/modules/Cliente/Domain/TipoCliente";
import { zodResolver } from "@hookform/resolvers/zod";
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
    referencia: z.string().nullable(),
    entreCalles: z.object({
      calle1: z.string(),
      calle2: z.string(),
    }),
  })
  .required({
    calle: true,
    numero: true,
  });

const TiposCliente: [TipoCliente, TipoCliente] = [
  "residencial",
  "gran_generador",
];
const DiaDePreferenciaEnum: [
  DiaDePreferencia,
  DiaDePreferencia,
  DiaDePreferencia,
  DiaDePreferencia,
  DiaDePreferencia
] = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES"];

export const ClienteSchema = z.object({
  nombre: z.string().refine((value) => value.length > 0, {
    message: "El nombre no puede estar vacío",
  }),
  apellido: z.string().refine((value) => value.length > 0, {
    message: "El apellido no puede estar vacío",
  }),
  email: z.string().email({
    message: "Debe ingresar un email válido",
  }),
  //TODO: Validar que el email no esté en uso
  // .refine(
  //   async (value) => {
  //     if (!value) return false;
  //     const res = await fetch(`/api/validate/email?email=${value}`);
  //     const { isValid } = await res.json();
  //     return isValid;
  //   },
  //   {
  //     message: "El email parece estar en uso",
  //   }
  // ),

  telefono: z.string().refine((value) => value.length > 0, {
    message: "El teléfono no puede estar vacío",
  }),
  direccion: DireccionSchema,
  fechaRegistro: z.coerce.date(), //.refine((value) => console.log(value), {  message: "La fecha de registro no puede ser mayor a la actual",  }),
  tipoCliente: z.enum(TiposCliente),
  cuit: z.optional(z.coerce.number()),
  diaDePreferencia: z.enum(DiaDePreferenciaEnum),
});

export type ClienteSchema = z.infer<typeof ClienteSchema>;

export const ClienteSinDireccionSchema: ZodType<Omit<Cliente, "direccion">> =
  ClienteSchema.omit({ direccion: true }).refine(
    (value) => value.tipoCliente !== "gran_generador" || !!value.cuit,
    {
      message: "El cuit es obligatorio para clientes comerciales",

      path: ["cuit"],
    }
  );

export const ClienteDefaultValues = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  tipoCliente: "residencial" as TipoCliente,
  cuit: "",
  fechaRegistro: new Date(),
  diaDePreferencia: "LUNES" as DiaDePreferencia,
  // direccion: DireccionDefaultValues,
};
export const DireccionDefaultValues = {
  calle: "",
  barrio: "",
  numero: 0,
  piso: 0,
  entreCalles: {
    calle1: "",
    calle2: "",
  },
  localidad: "",
  referencia: "",
};

//TODO: Estas funciones tienen que estar en otro archivo
export const ClienteResolver = zodResolver(ClienteSchema);
export const ClienteSinDireccionResolver = zodResolver(
  ClienteSinDireccionSchema
);

export const DireccionResolver = zodResolver(DireccionSchema);
