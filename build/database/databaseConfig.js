"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require("dotenv/config");
const promise_1 = __importDefault(require("mysql2/promise"));
const mysql2_1 = require("drizzle-orm/mysql2");
const migrator_1 = require("drizzle-orm/mysql2/migrator");
const agents_1 = require("./schema/agents");
const users_1 = require("./schema/users");
const poolConnection = promise_1.default.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    database: process.env.MYSQL_ADDON_DB,
    password: process.env.MYSQL_ADDON_PASSWORD,
    port: Number(process.env.MYSQL_ADDON_PORT),
});
exports.db = (0, mysql2_1.drizzle)(poolConnection, { mode: "default", schema: { users: users_1.users, agents: agents_1.agents } });
const migration = () => __awaiter(void 0, void 0, void 0, function* () { return yield (0, migrator_1.migrate)(exports.db, { migrationsFolder: 'src/database/migrations' }); });
migration();
