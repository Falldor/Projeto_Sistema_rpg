/*
  Warnings:

  - Added the required column `estresse` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nivelFisico` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nivelMental` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vida` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "estresse" INTEGER NOT NULL,
ADD COLUMN     "nivelFisico" INTEGER NOT NULL,
ADD COLUMN     "nivelMental" INTEGER NOT NULL,
ADD COLUMN     "vida" INTEGER NOT NULL;
