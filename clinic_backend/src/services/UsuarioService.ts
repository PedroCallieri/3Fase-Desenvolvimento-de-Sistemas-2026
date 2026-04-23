import type { Usuario } from "../prisma/generated/prisma/client";
import { createHash } from "../utils/createHash";
import bcrypt from "bcrypt";
import { usuarioRepository, type UsuarioRepository } from "../repositories/UsuarioRepository";

export class UsuarioService {
    constructor(private readonly repository: UsuarioRepository) { 
    }

    async listarTodosUsuarios() {
        const usuarios = await this.repository.listarTodosUsuarios()
        return usuarios
    }

    async criarUsuario(dadosUsuario: Usuario) {
        const hash = await createHash(dadosUsuario.senha);

        const usuarioCriado = await this.repository.criarUsuario({
            email: dadosUsuario.email,
            nome: dadosUsuario.nome || null,
            senha: hash
        })
        return usuarioCriado
    }

    async buscarUsuarioId(idUsuario: number) {
        const usuario = await this.repository.buscarUsuarioId(idUsuario);
        return usuario;
    }

    async atualizarUsuario(idUsuario: number, dadosParaAtualizar: Omit<Usuario, 'id'>) {
        const usuarioAtualizado = await this.repository.atualizarUsuario(idUsuario, dadosParaAtualizar)
        return usuarioAtualizado;
    }


    async deletarUsuario(idUsuario: number) {
        const usuario = await this.repository.deletarUsuario(idUsuario);
        return usuario;
    }
}

export const usuarioService = new UsuarioService(usuarioRepository);