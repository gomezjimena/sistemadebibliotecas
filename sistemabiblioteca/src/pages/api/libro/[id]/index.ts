import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/config/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      await prisma.libro.delete({
        where: { id: id as string },
      });
      return res.status(200).json({ message: 'Libro eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar libro:', error);
      return res.status(500).json({ error: 'Error al eliminar libro' });
    }
  }

  if (req.method === 'PUT') {
  const { titulo, autor, categoria, paginas, ubicacion, signatura, imagesrc, estado } = req.body;

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateData: any = {};

    if (estado !== undefined) {
      updateData.estado = estado;
    }

    if (titulo !== undefined) updateData.titulo = titulo;
    if (autor !== undefined) updateData.autor = autor;
    if (categoria !== undefined) updateData.categoria = categoria;
    if (paginas !== undefined) updateData.paginas = Number(paginas);
    if (ubicacion !== undefined) updateData.ubicacion = ubicacion;
    if (signatura !== undefined) updateData.signatura = signatura;
    if (imagesrc !== undefined) updateData.imagesrc = imagesrc;

    const updatedLibro = await prisma.libro.update({
      where: { id: id as string },
      data: updateData,
    });

    return res.status(200).json(updatedLibro);
  } catch (error) {
    console.error('Error al actualizar libro:', error);
    return res.status(500).json({ error: 'Error al actualizar libro' });
  }
}

  res.setHeader('Allow', ['DELETE', 'PUT']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
