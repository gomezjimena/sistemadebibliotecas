import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/config/prisma';  // Asumo que este es tu cliente Prisma

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
    const { estado } = req.body;
    try {
      const updatedLibro = await prisma.libro.update({
        where: { id: id as string },
        data: { estado },
      });
      return res.status(200).json(updatedLibro);
    } catch (error) {
      console.error('Error al actualizar estado:', error);
      return res.status(500).json({ error: 'Error al actualizar estado' });
    }
  }

  res.setHeader('Allow', ['DELETE', 'PUT']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
