ALTER TABLE "clientes" ALTER COLUMN "cuit" SET DATA TYPE bigint;--> statement-breakpoint
ALTER TABLE "clientes" ALTER COLUMN "fecha_registro" DROP NOT NULL;