import { MySqlTable } from "drizzle-orm/mysql-core";
import { db } from "../database/databaseConfig";

export const findAll = async <Model>(columns: any, table: MySqlTable) => {
    return db.select(columns).from(table);
};
