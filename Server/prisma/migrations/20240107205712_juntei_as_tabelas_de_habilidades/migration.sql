/*
  Warnings:

  - You are about to drop the `HabilidadeFisica` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HabilidadeMental` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "HabilidadeFisica" DROP CONSTRAINT "HabilidadeFisica_idPlayer_fkey";

-- DropForeignKey
ALTER TABLE "HabilidadeMental" DROP CONSTRAINT "HabilidadeMental_idPlayer_fkey";

-- DropTable
DROP TABLE "HabilidadeFisica";

-- DropTable
DROP TABLE "HabilidadeMental";

-- CreateTable
CREATE TABLE "Habilidade" (
    "idPlayer" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Nivel" INTEGER NOT NULL,

    CONSTRAINT "Habilidade_pkey" PRIMARY KEY ("idPlayer")
);

-- AddForeignKey
ALTER TABLE "Habilidade" ADD CONSTRAINT "Habilidade_idPlayer_fkey" FOREIGN KEY ("idPlayer") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
