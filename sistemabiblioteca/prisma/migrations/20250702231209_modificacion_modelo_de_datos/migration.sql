/*
  Warnings:

  - You are about to drop the column `inventarioId` on the `Libro` table. All the data in the column will be lost.
  - You are about to drop the column `listaEsperaId` on the `Libro` table. All the data in the column will be lost.
  - You are about to drop the `Inventario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ListaEspera` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsuarioEnListaEspera` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_libroId_fkey";

-- DropForeignKey
ALTER TABLE "ListaEspera" DROP CONSTRAINT "ListaEspera_libroId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioEnListaEspera" DROP CONSTRAINT "UsuarioEnListaEspera_listaEsperaId_fkey";

-- DropForeignKey
ALTER TABLE "UsuarioEnListaEspera" DROP CONSTRAINT "UsuarioEnListaEspera_userId_fkey";

-- AlterTable
ALTER TABLE "Libro" DROP COLUMN "inventarioId",
DROP COLUMN "listaEsperaId",
ADD COLUMN     "imagesrc" TEXT DEFAULT 'https://img.freepik.com/vector-gratis/libro-cubierta-roja_1110-770.jpg';

-- DropTable
DROP TABLE "Inventario";

-- DropTable
DROP TABLE "ListaEspera";

-- DropTable
DROP TABLE "UsuarioEnListaEspera";
