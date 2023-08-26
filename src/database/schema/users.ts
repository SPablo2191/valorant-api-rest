import { relations } from "drizzle-orm";
import { mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core";
import { agents } from "./agents";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  lastName: text("lastName"),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
});

export const usersRelations = relations(users, ({ many }) => ({
  agents: many(agents),
}));

export type User = typeof users.$inferSelect;
export type NewUser = Omit<typeof users.$inferInsert, "id">;
