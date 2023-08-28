"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jwt = require("jsonwebtoken");
require("dotenv/config");
const generateJWT = (uid, email) => {
    const payload = { uid, name: email };
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.SECRET_JWT_SEED, {
            expiresIn: "24h",
        }, (err, token) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            else if (token) {
                resolve(token);
            }
            else {
                reject(new Error("Token no generado"));
            }
        });
    });
};
exports.generateJWT = generateJWT;
