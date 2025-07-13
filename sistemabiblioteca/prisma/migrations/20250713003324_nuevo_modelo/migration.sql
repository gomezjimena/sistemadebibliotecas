/*
  Warnings:

  - You are about to drop the `Prestamo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Prestamo" DROP CONSTRAINT "Prestamo_bibliotecarioId_fkey";

-- DropForeignKey
ALTER TABLE "Prestamo" DROP CONSTRAINT "Prestamo_libroId_fkey";

-- DropForeignKey
ALTER TABLE "Prestamo" DROP CONSTRAINT "Prestamo_usuarioId_fkey";

-- DropTable
DROP TABLE "Prestamo";

-- DropEnum
DROP TYPE "EstadoPrestamo";
