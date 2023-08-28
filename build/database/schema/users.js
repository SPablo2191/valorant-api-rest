"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRelations = exports.users = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const mysql_core_1 = require("drizzle-orm/mysql-core");
const agents_1 = require("./agents");
exports.users = (0, mysql_core_1.mysqlTable)("users", {
    id: (0, mysql_core_1.serial)("id").primaryKey(),
    name: (0, mysql_core_1.text)("name"),
    lastName: (0, mysql_core_1.text)("lastName"),
    email: (0, mysql_core_1.varchar)("email", { length: 256 }),
    password: (0, mysql_core_1.varchar)("password", { length: 256 }),
});
exports.usersRelations = (0, drizzle_orm_1.relations)(exports.users, ({ many }) => ({
    agents: many(agents_1.agents),
}));
