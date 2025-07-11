import { NextApiRequest, NextApiResponse } from 'next';
import  prisma  from '@/config/prisma';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'GET') {
    const reservas = await prisma.reserva.findMany({
      include: { libro: true, usuario: true },
    });
    res.status(200).json(reservas);
  } else if (req.method === 'POST') {
    const reserva = await prisma.reserva.create({ data: req.body });
    res.status(201).json(reserva);
  } else {
    res.status(405).end();
  }
}