import { defineConfig } from "drizzle-kit";
//TODO: esto habria que cambiarlo por una inyeccion de dependencias
import { supabaseURL } from "./supabase/config";

export default defineConfig({
  schema: "./schemas",
  driver: "pg",
  dbCredentials: {
    connectionString: supabaseURL,
  },
  verbose: true,
  strict: true,
  out: "migrations",
});
