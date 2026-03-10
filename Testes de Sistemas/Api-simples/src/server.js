import app from "./app.js";

const Port = 3000;
app.listen(Port, () => {
  console.log ("Servidor rodando na porta ${PORT}");
});