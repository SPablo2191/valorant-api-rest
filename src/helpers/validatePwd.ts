const bcrypt = require("bcryptjs");


export function validatePwd( dbPwd : string, pwd : string) : boolean {
    let validPassword : boolean = bcrypt.compareSync(pwd,dbPwd);
    return validPassword;
}