import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/userRoutes";
import authRouter from "./routes/authRoutes";
import agentRouter from "./routes/agentRoutes";

const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors({ credentials: true }));
app.use(bodyParser.json()); //middleware serializer
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/user/agents", agentRouter);

app.get("/", (_req, res) => {
  return res.send("Welcome to Valorant API");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
