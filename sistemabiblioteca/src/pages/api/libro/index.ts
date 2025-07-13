import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/config/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const libros = await prisma.libro.findMany();
      return res.status(200).json(libros);
    } catch (error) {
      console.error('Error al obtener libros:', error);
      return res.status(500).json({ error: 'Error al obtener libros' });
    }
  }

  if (req.method === 'POST') {
    const { titulo, autor, categoria, paginas, ubicacion, signatura, imagesrc } = req.body;

    try {
      const nuevoLibro = await prisma.libro.create({
        data: {
          titulo,
          autor,
          categoria,
          paginas: Number(paginas),
          ubicacion,
          signatura,
          estado: 'DISPONIBLE', // Estado por defecto
          imagesrc,
        },
      });

      return res.status(201).json(nuevoLibro);
    } catch (error) {
      console.error('Error al crear libro:', error);
      return res.status(500).json({ error: 'Error al crear libro' });
    }
  }

  // Si no es GET ni POST
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
