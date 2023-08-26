import express from "express";
import { findAll } from "../service/baseService";
import { User, users } from "../database/schema/users";
import { db } from "../database/databaseConfig";

export const getAllUsers = async (
  _req: express.Request,
  res: express.Response
) => {
  try {
    const results: User[] = await findAll<User>(users);
    return res.status(200).json(results);
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};

export const getUserProfile = async (
  _req: express.Request,
  res: express.Response
) => {
  try {
    const {
      params: { userId },
    } = _req;
    if (!userId) return res.sendStatus(400);
    const result = await db.query.users.findMany({
      with: {
        agents: true,
      },
    });
    console.log(result);
    return res.status(200).json(result[0]);
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};
