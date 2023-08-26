import "dotenv/config";
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { agents } from "./schema/agents";
import { users } from "./schema/users";

const poolConnection = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  database: process.env.MYSQL_ADDON_DB,
  password: process.env.MYSQL_ADDON_PASSWORD,
  port: Number(process.env.MYSQL_ADDON_PORT),
});
export const db = drizzle(poolConnection,{mode: "default",schema : {users,agents}});
const migration = async () => await migrate(db, { migrationsFolder: 'src/database/migrations' });
migration();
