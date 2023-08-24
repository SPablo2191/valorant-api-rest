import { mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";


export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  lastName: text("lastName"),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
});

// Schema for inserting a user - can be used to validate API requests
export const _insertUserSchema = createInsertSchema(users);

// Schema for selecting a user - can be used to validate API responses
export const _selectUserSchema = createSelectSchema(users);

export type User = Omit<typeof users.$inferSelect, "password">; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type

// export const findAll = async (): Promise<User[]> => {
//   return db
//     .select({
//       id: users.id,
//       name: users.name,
//       lastName: users.lastName,
//       email: users.email,
//     })
//     .from(users);
// };
