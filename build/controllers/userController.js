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
exports.getUserProfile = exports.getAllUsers = void 0;
const baseService_1 = require("../service/baseService");
const users_1 = require("../database/schema/users");
const agents_1 = require("../database/schema/agents");
const drizzle_orm_1 = require("drizzle-orm");
const getAllUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield (0, baseService_1.findAll)(users_1.users);
        return res.status(200).json(results);
    }
    catch (e) {
        console.log(e);
        return res.sendStatus(400);
    }
});
exports.getAllUsers = getAllUsers;
const getUserProfile = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { userId }, } = _req;
        if (!userId)
            return res.sendStatus(400);
        const result = yield (0, baseService_1.innerJoin)(users_1.users, agents_1.agents, drizzle_orm_1.eq, users_1.users.id, agents_1.agents.userId, userId);
        return res.status(200).json(result[0]);
    }
    catch (e) {
        console.log(e);
        return res.sendStatus(400);
    }
});
exports.getUserProfile = getUserProfile;
