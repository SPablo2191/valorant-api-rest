import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import router from "./routes/userRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ credentials: true }));
app.use(bodyParser.json()); //middleware serializer
app.use('/api/users', router);


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
