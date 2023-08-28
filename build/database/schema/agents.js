"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.agentsRelations = exports.agents = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
const users_1 = require("./users");
const drizzle_orm_1 = require("drizzle-orm");
exports.agents = (0, mysql_core_1.mysqlTable)("agents", {
    id: (0, mysql_core_1.serial)("id").primaryKey(),
    uuid: (0, mysql_core_1.varchar)("uuid", { length: 256 }),
    displayName: (0, mysql_core_1.text)("displayName"),
    displayIcon: (0, mysql_core_1.varchar)("displayIcon", { length: 256 }),
    userId: (0, mysql_core_1.int)("user_id").notNull(),
});
exports.agentsRelations = (0, drizzle_orm_1.relations)(exports.agents, ({ one }) => ({
    author: one(users_1.users, { fields: [exports.agents.userId], references: [users_1.users.id] }),
}));
