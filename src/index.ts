import express from "express";
const app = express();
app.use(express.json()); //middleware serializer
const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("ping");
  res.send("Que onda?");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
