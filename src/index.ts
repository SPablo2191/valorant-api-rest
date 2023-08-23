import express from "express";
const app = express();
app.use(express.json()); //middleware serializer
const PORT = 3000;



app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
