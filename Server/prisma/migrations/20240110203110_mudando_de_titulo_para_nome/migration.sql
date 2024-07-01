/*
  Warnings:

  - You are about to drop the column `titulo` on the `Habilidade` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Habilidade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Habilidade" DROP COLUMN "titulo",
ADD COLUMN     "nome" TEXT NOT NULL;
