import { NextApiRequest, NextApiResponse } from 'next';
import  prisma  from '@/config/prisma';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'GET') {
    const prestamos = await prisma.prestamo.findMany({
      include: { libro: true, usuario: true, bibliotecario: true },
    });
    res.status(200).json(prestamos);
  } else if (req.method === 'POST') {
    const prestamo = await prisma.prestamo.create({ data: req.body });
    res.status(201).json(prestamo);
  } else {
    res.status(405).end();
  }
}