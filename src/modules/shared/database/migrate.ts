import { migrate } from "drizzle-orm/postgres-js/migrator";

import { connection, db } from "./DB";

(async () => {
  await migrate(db, { migrationsFolder: "migrations" });
  await connection.end();
})();
