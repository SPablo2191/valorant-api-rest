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
exports.login = exports.register = void 0;
const users_1 = require("../database/schema/users");
const baseService_1 = require("../service/baseService");
const drizzle_orm_1 = require("drizzle-orm");
const validatePwd_1 = require("../helpers/validatePwd");
const generateToken_1 = require("../helpers/generateToken");
const bcrypt = require("bcryptjs");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = req.body;
        const allFieldsHaveValued = Object.values(newUser).every((field) => field !== null || field !== undefined);
        if (!allFieldsHaveValued) {
            return res.sendStatus(400);
        }
        try {
            const result = yield (0, baseService_1.findOneWhere)(users_1.users, drizzle_orm_1.eq, users_1.users.email, newUser.email);
            if (!result || result.length > 0) {
                return res.sendStatus(400);
            }
        }
        catch (_a) {
            return res.sendStatus(400);
        }
        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync(newUser.password, salt);
        const user = yield (0, baseService_1.create)(users_1.users, newUser);
        return res.status(200).json(user).end();
    }
    catch (e) {
        console.log(e);
        return res.sendStatus(400);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataRequested = req.body;
        if (!dataRequested.email || !dataRequested.password) {
            console.log("email or password is null");
            return res.sendStatus(400);
        }
        let user;
        let token = "";
        try {
            const result = yield (0, baseService_1.findOneWhere)(users_1.users, drizzle_orm_1.eq, users_1.users.email, dataRequested.email);
            user = result[0];
            if (!(0, validatePwd_1.validatePwd)(user.password, dataRequested.password))
                return res.status(400).json({ ok: false, msg: "Invalid password" });
            token = yield (0, generateToken_1.generateJWT)(user.id, user.email);
        }
        catch (_b) {
            return res.sendStatus(400);
        }
        return res.json({
            ok: true,
            uid: user.id,
            name: `${user.name} ${user.lastName}`,
            email: user.email,
            token,
        });
    }
    catch (e) {
        console.log(e);
        return res.sendStatus(400);
    }
});
exports.login = login;
