DO $$ BEGIN
 CREATE TYPE "tipo" AS ENUM('residencial', 'comercial');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "clientes" (
	"id" serial PRIMARY KEY NOT NULL,
	"tipo" "tipo" DEFAULT 'residencial' NOT NULL,
	"nombre" text NOT NULL,
	"apellido" text NOT NULL,
	"email" varchar NOT NULL,
	"telefono" varchar(11) NOT NULL,
	"direccion" json,
	"fecha_registro" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "clientes_email_unique" UNIQUE("email")
);
