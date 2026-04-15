import express from "express";
import { TaskViewModel } from "../viewmodels/TaskViewModel";

const router = express.Router();
const vm = new TaskViewModel();

router.get("/tasks", (req, res) => {
  res.json(vm.getAll());
});

router.post("/tasks", (req, res) => {
  try {
    vm.create(req.body);
    res.status(201).send("Tarefa criada");
  } catch (err: any) {
    res.status(400).send(err.message);
  }
});

router.patch("/tasks/:id", (req, res) => {
  vm.toggle(Number(req.params.id));
  res.send("Atualizado");
});

router.get("/tasks/stats", (req, res) => {
  res.json(vm.stats());
});

export default router;