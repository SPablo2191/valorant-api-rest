import { MySqlTable } from "drizzle-orm/mysql-core";
import { db } from "../database/databaseConfig";

export async function findAll<Model>(table: MySqlTable,columns? : any): Promise<Model[]> {
  const results = await db.select(columns).from(table);
  return results as Model[];
}
