import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { supabaseURL } from "./supabase/config";

// The "Transaction" pool mode is recommended for Next.js
// Disable prefetch as it is not supported for "Transaction" pool mode
export const connection = postgres(supabaseURL, {
  prepare: false,
  max: 5,
});

export const db = drizzle(connection);
