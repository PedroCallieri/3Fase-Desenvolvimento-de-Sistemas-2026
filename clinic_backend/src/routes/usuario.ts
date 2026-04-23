import { Router } from "express";
import { usuarioController } from "../controllers/UsuarioController";

export const usuarioRouter = Router();

// Endpoints usuario
usuarioRouter.get('/usuarios', async (_, res) => {
  return usuarioController.listarTodosUsuarios(_, res)
})

usuarioRouter.get('/usuarios/:id', async (req, res) => {
  return usuarioController.buscarUsuarioId(req, res)
  })


usuarioRouter.post("/usuarios", async (req, res) => {
  return usuarioController.criarUsuario(req, res)
})


usuarioRouter.put("/usuarios/:id", async (req, res) => {
return usuarioController.atualizarUsuario(req, res)
})

usuarioRouter.delete('/usuarios/:id', async (req, res) => {
  return usuarioController.deletarUsuario(req, res)
})
