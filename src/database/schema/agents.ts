import {  mysqlTable, serial, text, varchar,int } from "drizzle-orm/mysql-core";
import { users } from "./users";
import { relations } from "drizzle-orm";


export const agents = mysqlTable("agents", {
  id: serial("id").primaryKey(),
  uuid: varchar("uuid", { length: 256 }),
  displayName: text("displayName"),
  displayIcon: varchar("displayIcon", { length: 256 }),
  userId: int("user_id").notNull(),
});

export const agentsRelations = relations(agents, ({ one }) => ({
  author: one(users, { fields: [agents.userId], references: [users.id] }),
}));

export type Agent = typeof agents.$inferSelect;
export type NewAgent = Omit<typeof agents.$inferInsert, "id">;
