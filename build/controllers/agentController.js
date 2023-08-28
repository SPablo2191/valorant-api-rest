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
exports.addAgentFavourite = void 0;
const users_1 = require("../database/schema/users");
const baseService_1 = require("../service/baseService");
const drizzle_orm_1 = require("drizzle-orm");
const agents_1 = require("../database/schema/agents");
const addAgentFavourite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield (0, baseService_1.findOneWhere)(users_1.users, drizzle_orm_1.eq, users_1.users.id, data.userId);
        if (result.length === 0)
            return res.status(400).json({ ok: false, msg: "user invalid" });
        const newAgent = {
            uuid: data.uuid,
            userId: result[0].id,
            displayName: data.displayName,
            displayIcon: data.displayIcon,
        };
        const allFieldsHaveValued = Object.values(newAgent).every((field) => field !== null || field !== undefined);
        if (!allFieldsHaveValued) {
            return res.sendStatus(400).json({ ok: false, msg: "field incomplete" });
        }
        const dbAgent = yield (0, baseService_1.create)(agents_1.agents, newAgent);
        return res.status(200).json(dbAgent).end();
    }
    catch (e) {
        console.log(e);
        return res.sendStatus(400);
    }
});
exports.addAgentFavourite = addAgentFavourite;
