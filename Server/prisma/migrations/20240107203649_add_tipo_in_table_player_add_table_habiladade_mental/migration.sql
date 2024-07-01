/*
  Warnings:

  - Added the required column `tipo` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "tipo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "HabilidadeMental" (
    "idPlayer" INTEGER NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Nivel" INTEGER NOT NULL,

    CONSTRAINT "HabilidadeMental_pkey" PRIMARY KEY ("idPlayer")
);

-- AddForeignKey
ALTER TABLE "HabilidadeMental" ADD CONSTRAINT "HabilidadeMental_idPlayer_fkey" FOREIGN KEY ("idPlayer") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
