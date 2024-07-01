/*
  Warnings:

  - You are about to drop the `player` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "player";

-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "Exp" INTEGER NOT NULL,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HabilidadeFisica" (
    "idPlayer" INTEGER NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Nivel" INTEGER NOT NULL,

    CONSTRAINT "HabilidadeFisica_pkey" PRIMARY KEY ("idPlayer")
);

-- AddForeignKey
ALTER TABLE "HabilidadeFisica" ADD CONSTRAINT "HabilidadeFisica_idPlayer_fkey" FOREIGN KEY ("idPlayer") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
