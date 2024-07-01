/*
  Warnings:

  - You are about to drop the column `Nivel` on the `Habilidade` table. All the data in the column will be lost.
  - You are about to drop the column `Titulo` on the `Habilidade` table. All the data in the column will be lost.
  - You are about to drop the column `Exp` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `Nome` on the `Player` table. All the data in the column will be lost.
  - Added the required column `nivel` to the `Habilidade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Habilidade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exp` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Habilidade" DROP COLUMN "Nivel",
DROP COLUMN "Titulo",
ADD COLUMN     "nivel" INTEGER NOT NULL,
ADD COLUMN     "titulo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "Exp",
DROP COLUMN "Nome",
ADD COLUMN     "exp" INTEGER NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;
