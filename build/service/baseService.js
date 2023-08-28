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
Object.defineProperty(exports, "__esModule", { value: true });
exports.innerJoin = exports.create = exports.findOneWhere = exports.findAll = void 0;
const databaseConfig_1 = require("../database/databaseConfig");
function findAll(table, columns) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = columns
            ? yield databaseConfig_1.db.select(columns).from(table)
            : yield databaseConfig_1.db.select().from(table);
        return results;
    });
}
exports.findAll = findAll;
function findOneWhere(table, operator, columnValue, comparisonValue) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield databaseConfig_1.db
            .select()
            .from(table)
            .where(operator(columnValue, comparisonValue));
        return results;
    });
}
exports.findOneWhere = findOneWhere;
function create(table, values) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield databaseConfig_1.db.insert(table).values(values);
        return results;
    });
}
exports.create = create;
function innerJoin(table, innerTable, operator, columnValue, innerValue, comparisonValue) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield databaseConfig_1.db
            .select()
            .from(table)
            .innerJoin(innerTable, operator(columnValue, innerValue)).where(operator(columnValue, comparisonValue));
        return results;
    });
}
exports.innerJoin = innerJoin;
