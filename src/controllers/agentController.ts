import express from "express";
import { User, users } from "../database/schema/users";
import { create, findOneWhere } from "../service/baseService";
import { eq } from "drizzle-orm";
import { Agent, NewAgent, agents } from "../database/schema/agents";

export const addAgentFavourite = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const data = req.body;
    const result = await findOneWhere<User>(users, eq, users.id, data.userId!);
    if (result.length === 0)
      return res.status(400).json({ ok: false, msg: "user invalid" });
    const newAgent: NewAgent = {
      uuid: data.uuid,
      userId: result[0].id,
      displayName: data.displayName,
      displayIcon: data.displayIcon,
    } as NewAgent;
    const allFieldsHaveValued = Object.values(newAgent).every(
      (field) => field !== null || field !== undefined
    );
    if (!allFieldsHaveValued) {
      return res.sendStatus(400).json({ ok: false, msg: "field incomplete" });
    }
    const dbAgent = await create<Agent>(agents, newAgent);
    return res.status(200).json(dbAgent).end();
  } catch (e) {
    console.log(e);
    return res.sendStatus(400);
  }
};
