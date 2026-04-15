import express from "express";
import taskRoutes from "./routes/TaskRoutes";

const app = express();

app.use(express.json());


app.use("/", taskRoutes);


app.get("/", (req, res) => {
  res.send("MVVM API rodando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});