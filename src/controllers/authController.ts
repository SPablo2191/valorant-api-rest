import express from "express";
import { NewUser, User, users } from "../database/schema/users";
import { create, findOneWhere } from "../service/baseService";
import { eq } from "drizzle-orm";
import { validatePwd } from "../helpers/validatePwd";
import { generateJWT } from "../helpers/generateToken";
const bcrypt = require("bcryptjs");

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const newUser: NewUser = req.body;
    const allFieldsHaveValued = Object.values(newUser).every(
      (field) => field !== null || field !== undefined
    );
    if (!allFieldsHaveValued) {
      return res.sendStatus(400);
    }
    try {
      const result = await findOneWhere<User>(
        users,
        eq,
        users.email,
        newUser.email!
      );

      if (!result || result.length > 0) {
        return res.sendStatus(400);
      }
    } catch {
      return res.sendStatus(400);
    }
    const salt = bcrypt.genSaltSync();
    newUser.password = bcrypt.hashSync(newUser.password!, salt);
    const user = await create<User>(users, newUser);

    return res.status(200).json(user).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const dataRequested: NewUser = req.body;

    if (!dataRequested.email || !dataRequested.password) {
      console.log("email or password is null");
      return res.sendStatus(400);
    }
    let user: User;
    let token: string = "";
    try {
      const result = await findOneWhere<User>(
        users,
        eq,
        users.email,
        dataRequested.email!
      );
      user = result[0];
      if (!validatePwd(user.password!, dataRequested.password!))
        return res.status(400).json({ ok: false, msg: "Invalid password" });
      token = await generateJWT(user.id, user.email!);
    } catch {
      return res.sendStatus(400);
    }
    return res.json({
      ok: true,
      uid: user.id,
      name: `${user.name} ${user.lastName}`,
      email: user.email,
      token,
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};
