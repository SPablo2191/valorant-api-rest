import { MySqlTable,SelectedFields } from "drizzle-orm/mysql-core";
import { db } from "../database/databaseConfig";

export async function findAll<Model>(table: MySqlTable,columns? : SelectedFields): Promise<Model[]> {
  const results = columns? (await db.select(columns).from(table)) : (await db.select().from(table));
  return results as Model[];
}
