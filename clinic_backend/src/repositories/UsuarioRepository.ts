import type { PrismaClient, Token, Usuario } from "../prisma/generated/prisma/client";
import { prisma } from "../prisma/prisma";

export class UsuarioRepository {
   constructor(private readonly prisma: PrismaClient) {
        this.prisma = prisma
    }

  async listarTodosUsuarios() {
    const usuarios = await prisma.usuario.findMany();
    return usuarios;
  }

  async buscarUsuarioId(idUsuario: number) {
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: idUsuario,
      },
    });

    return usuario;
  }

  async criarUsuario(dadosUsuario: Partial<Usuario>) {
    return await prisma.usuario.create({
      data: {
        email: dadosUsuario.email || "",
        nome: dadosUsuario.nome || "null",
        senha: dadosUsuario.senha || "",
      },
    });
  }

  async atualizarUsuario(
    idUsuario: number,
    dadosParaAtualizar: Omit<Usuario, "id">,
  ) {
    const usuarioAtualizado = await prisma.usuario.update({
      data: {
        ...dadosParaAtualizar,
      },
      where: {
        id: idUsuario,
      },
    });
    return usuarioAtualizado;
  }

  async deletarUsuario(idUsuario: number) {
    const usuario = await prisma.usuario.delete({
      where: {
        id: idUsuario,
      },
    });

    return usuario;
  }
}

export const usuarioRepository = new UsuarioRepository(prisma);
