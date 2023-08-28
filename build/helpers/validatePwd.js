"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePwd = void 0;
const bcrypt = require("bcryptjs");
function validatePwd(dbPwd, pwd) {
    let validPassword = bcrypt.compareSync(pwd, dbPwd);
    return validPassword;
}
exports.validatePwd = validatePwd;
