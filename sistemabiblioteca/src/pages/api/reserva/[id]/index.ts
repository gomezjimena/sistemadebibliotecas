import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/config/prisma';  // Ajusta la ruta si es diferente en tu proyecto

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'ID inválido' });
  }

  switch (req.method) {
    case 'PUT':
      return actualizarEstado(req, res, id);

    case 'DELETE':
      return eliminarLibro(req, res, id);

    default:
      res.setHeader('Allow', ['PUT', 'DELETE']);
      return res.status(405).end(`Método ${req.method} no permitido`);
  }
}

// 👉 PUT: Actualizar estado del libro
async function actualizarEstado(req: NextApiRequest, res: NextApiResponse, id: string) {
  const { estado } = req.body;

  if (!estado) {
    return res.status(400).json({ error: 'El estado es obligatorio' });
  }

  try {
    const updatedLibro = await prisma.libro.update({
      where: { id },
      data: { estado },
    });

    return res.status(200).json(updatedLibro);
  } catch (error) {
    console.error('Error al actualizar libro:', error);
    return res.status(500).json({ error: 'Error al actualizar el estado del libro' });
  }
}

// 👉 DELETE: Eliminar libro
async function eliminarLibro(req: NextApiRequest, res: NextApiResponse, id: string) {
  try {
    await prisma.libro.delete({
      where: { id },
    });

    return res.status(200).json({ message: 'Libro eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar libro:', error);
    return res.status(500).json({ error: 'Error al eliminar el libro' });
  }
}
