import express from "express";
import { addAgentFavourite } from "../controllers/agentController";
const agentRouter = express.Router();

agentRouter.post("/", addAgentFavourite);
export default agentRouter;
