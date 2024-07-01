/*
  Warnings:

  - The primary key for the `Habilidade` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Habilidade" DROP CONSTRAINT "Habilidade_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Habilidade_pkey" PRIMARY KEY ("id");
