import { int, mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core";

export const agents = mysqlTable("agents", {
  id: serial("id").primaryKey(),
  uuid: varchar("uuid", { length: 256 }),
  displayName: text("displayName"),
  displayIcon : varchar("displayIcon", { length: 256 }),
  userId: int('user_id').notNull(),
});

export type User = typeof agents.$inferSelect; 
export type NewUser = Omit<typeof agents.$inferInsert, "id">; 


