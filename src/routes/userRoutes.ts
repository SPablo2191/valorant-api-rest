import express from "express";
import { getAllUsers, getUserProfile } from "../controllers/userController";
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:userId", getUserProfile);
export default userRouter;
