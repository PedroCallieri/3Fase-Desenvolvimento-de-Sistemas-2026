import type { Request, Response } from "express";
import { UsuarioService, usuarioService } from "../services/UsuarioService";
import type { Usuario } from "../prisma/generated/prisma/client";

 export class UsuarioController {
    constructor(private readonly service: UsuarioService){
    }

    async listarTodosUsuarios(_: Request, res: Response){
        try {
            const usuarios = await this.service.listarTodosUsuarios()
            return res.json(usuarios);
        }catch (error) {
            console.log(error);

            return res.status(404).json({
                error
            });
        }  

    }

    async criarUsuario(req: Request, res: Response){
        try {
              const dadosUsuario = req.body as Usuario
              const usuarioCriado = await this.service.criarUsuario(dadosUsuario)
              return res.json(usuarioCriado);
            
        }catch (error) {
            console.log(error);

            return res.status(404).json({
                error
            });
        } 
    }

     async buscarUsuarioId(req: Request, res: Response) {
        try {
             const idUsuario = Number(req.params.id)
              const usuario = await this.service.buscarUsuarioId(idUsuario)
              return res.status(404).json(usuario);
            
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                error
            })
        }
    }

    async atualizarUsuario(req: Request, res: Response) {
        try {
             const idUsuario = Number(req.params.id)
            const dadosParaAtualizar = req.body as Omit<Usuario, 'id'>
            
            const usuarioAtualizado = await this.service.atualizarUsuario(idUsuario, dadosParaAtualizar)
            return res.status(404).json(usuarioAtualizado);
         } catch (error) {
            console.log(error)
            return res.status(404).json({
                error
            })
        }
    }

    async deletarUsuario(req: Request, res: Response) {
        try {
             const idUsuario = Number(req.params.id)
              const usuario = await this.service.deletarUsuario(idUsuario)
              return res.status(404).json(usuario);
            
        } catch (error) {
            console.log(error)
            return res.status(404).json({
                error
            })
        }
    }
}

export const usuarioController = new UsuarioController(usuarioService)