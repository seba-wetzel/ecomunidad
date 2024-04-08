DO $$ BEGIN
 CREATE TYPE "diaPreferencia" AS ENUM('LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "clientes" ADD COLUMN "dia_preferencia" "diaPreferencia" DEFAULT 'LUNES' NOT NULL;