import { defineConfig } from "drizzle-kit";
//TODO: esto habria que cambiarlo por una inyeccion de dependencias
import { password, supabaseURL } from "./supabase/config";

export default defineConfig({
  schema: "./schemas",
  driver: "pg",
  dbCredentials: {
    connectionString: supabaseURL,
    password: password,
  },
  verbose: true,
  strict: true,
  out: "migrations",
});
