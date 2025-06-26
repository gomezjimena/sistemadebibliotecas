/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[numeroTelefono]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[documento]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `apellido` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documento` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroTelefono` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Categoria" AS ENUM ('ROMANCE', 'TERROR', 'ACADEMICO', 'AVENTURA', 'DRAMA', 'CIENCIA_FICCION', 'ACCION', 'COMEDIA');

-- CreateEnum
CREATE TYPE "EstadoLibro" AS ENUM ('PRESTADO', 'DISPONIBLE', 'PERDIDO', 'RESERVADO');

-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('USUARIO', 'BIBLIOTECARIO', 'DIRECTOR');

-- CreateEnum
CREATE TYPE "EstadoReserva" AS ENUM ('VIGENTE', 'VENCIDA');

-- CreateEnum
CREATE TYPE "EstadoPrestamo" AS ENUM ('VIGENTE', 'VENCIDO', 'CERRADO');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
DROP COLUMN "role",
ADD COLUMN     "apellido" TEXT NOT NULL,
ADD COLUMN     "documento" TEXT NOT NULL,
ADD COLUMN     "numeroTelefono" TEXT NOT NULL,
ADD COLUMN     "rol" "Rol" NOT NULL DEFAULT 'USUARIO',
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL;

-- DropEnum
DROP TYPE "Enum_RoleName";

-- CreateTable
CREATE TABLE "Prestamo" (
    "id" TEXT NOT NULL,
    "libroId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "bibliotecarioId" TEXT NOT NULL,
    "fechaInicioPrestamo" TIMESTAMP(3) NOT NULL,
    "fechaFinPrestamo" TIMESTAMP(3) NOT NULL,
    "estado" "EstadoPrestamo" NOT NULL,

    CONSTRAINT "Prestamo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "libroId" TEXT NOT NULL,
    "fechaInicioReserva" TIMESTAMP(3) NOT NULL,
    "fechaFinReserva" TIMESTAMP(3) NOT NULL,
    "estado" "EstadoReserva" NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Libro" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "categoria" "Categoria" NOT NULL,
    "paginas" INTEGER NOT NULL,
    "estado" "EstadoLibro" NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "signatura" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "listaEsperaId" TEXT,
    "inventarioId" TEXT,

    CONSTRAINT "Libro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inventario" (
    "id" TEXT NOT NULL,
    "libroId" TEXT NOT NULL,
    "cantidadDisponible" INTEGER NOT NULL,
    "cantidadPrestada" INTEGER NOT NULL,
    "cantidadReservada" INTEGER NOT NULL,
    "cantidadTotal" INTEGER NOT NULL,

    CONSTRAINT "Inventario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ListaEspera" (
    "id" TEXT NOT NULL,
    "libroId" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ListaEspera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioEnListaEspera" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "listaEsperaId" TEXT NOT NULL,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsuarioEnListaEspera_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Libro_signatura_key" ON "Libro"("signatura");

-- CreateIndex
CREATE UNIQUE INDEX "Inventario_libroId_key" ON "Inventario"("libroId");

-- CreateIndex
CREATE UNIQUE INDEX "ListaEspera_libroId_key" ON "ListaEspera"("libroId");

-- CreateIndex
CREATE UNIQUE INDEX "UsuarioEnListaEspera_userId_key" ON "UsuarioEnListaEspera"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_numeroTelefono_key" ON "User"("numeroTelefono");

-- CreateIndex
CREATE UNIQUE INDEX "User_documento_key" ON "User"("documento");

-- AddForeignKey
ALTER TABLE "Prestamo" ADD CONSTRAINT "Prestamo_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "Libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prestamo" ADD CONSTRAINT "Prestamo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prestamo" ADD CONSTRAINT "Prestamo_bibliotecarioId_fkey" FOREIGN KEY ("bibliotecarioId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "Libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventario" ADD CONSTRAINT "Inventario_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "Libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListaEspera" ADD CONSTRAINT "ListaEspera_libroId_fkey" FOREIGN KEY ("libroId") REFERENCES "Libro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEnListaEspera" ADD CONSTRAINT "UsuarioEnListaEspera_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioEnListaEspera" ADD CONSTRAINT "UsuarioEnListaEspera_listaEsperaId_fkey" FOREIGN KEY ("listaEsperaId") REFERENCES "ListaEspera"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
