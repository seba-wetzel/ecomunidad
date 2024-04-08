import { DiaDePreferencia } from "@/modules/Cliente/Domain/Preferencia";
import { TipoCliente } from "@/modules/Cliente/Domain/TipoCliente";
import {
  integer,
  json,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  unique,
  varchar,
} from "drizzle-orm/pg-core";

const tipos: TipoCliente[] = ["residencial", "gran_generador"];
const dias: DiaDePreferencia[] = [
  "LUNES",
  "MARTES",
  "MIERCOLES",
  "JUEVES",
  "VIERNES",
];

export const TipoClienteEnum = pgEnum(
  "tipo",
  tipos as unknown as readonly [string, ...string[]]
);

export const DiaDePreferenciaEnum = pgEnum(
  "diaPreferencia",
  dias as unknown as readonly [string, ...string[]]
);

//this table is for the registration of the users and should respect the Cliente interface from the domain
export const clientes = pgTable(
  "clientes",
  {
    id: serial("id").primaryKey(),
    tipoCliente: TipoClienteEnum("tipo").notNull().default("residencial"),
    cuit: integer("cuit").default(0),
    nombre: text("nombre").notNull(),
    apellido: text("apellido").notNull(),
    email: varchar("email").notNull(),
    telefono: varchar("telefono", { length: 11 }).notNull(),
    direccion: json("direccion"),
    fechaRegistro: timestamp("fecha_registro").defaultNow().notNull(),
    diaDePreferencia: DiaDePreferenciaEnum("dia_preferencia")
      .notNull()
      .default("LUNES"),
  },
  (cliente) => ({
    unq: unique().on(cliente.email),
  })
);
