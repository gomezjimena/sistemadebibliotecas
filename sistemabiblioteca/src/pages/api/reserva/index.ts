import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/config/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const reservas = await prisma.reserva.findMany({
        include: { libro: true, usuario: true },
      });
      res.status(200).json(reservas);
    } catch (error) {
      console.error('Error al obtener reservas:', error);
      res.status(500).json({ error: 'Error al obtener reservas' });
    }
  } 
  
  else if (req.method === 'POST') {
    const { usuarioId, libroId, inicioreserva, finreserva } = req.body;

    if (!usuarioId || !libroId || !inicioreserva || !finreserva) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    try {
      const nuevaReserva = await prisma.reserva.create({
        data: {
          usuarioId,
          libroId,
          fechaInicioReserva: new Date(inicioreserva),
          fechaFinReserva: new Date(finreserva),
          estado: 'VIGENTE', 
        },
      });

      res.status(201).json(nuevaReserva);
    } catch (error) {
      console.error('Error al crear reserva:', error);
      res.status(500).json({ error: 'Error al crear reserva' });
    }
  } 
  
  else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
