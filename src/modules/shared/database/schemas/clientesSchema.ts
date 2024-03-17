import {
  json,
  pgTable,
  serial,
  text,
  timestamp,
  unique,
  varchar,
} from "drizzle-orm/pg-core";

//this table is for the registration of the users and should respect the Cliente interface from the domain
export const clientes = pgTable(
  "clientes",
  {
    id: serial("id").primaryKey(),
    nombre: text("nombre").notNull(),
    apellido: text("apellido").notNull(),
    email: varchar("email").notNull(),
    telefono: varchar("telefono", { length: 11 }).notNull(),
    direccion: json("direccion"),
    fechaRegistro: timestamp("fecha_registro").defaultNow().notNull(),
  },
  (cliente) => ({
    unq: unique().on(cliente.email),
  })
);
