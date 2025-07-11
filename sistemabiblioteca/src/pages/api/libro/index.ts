import { NextApiRequest, NextApiResponse } from 'next';
import  prisma  from '@/config/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const libros = await prisma.libro.findMany();
      res.status(200).json(libros);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener libros' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}