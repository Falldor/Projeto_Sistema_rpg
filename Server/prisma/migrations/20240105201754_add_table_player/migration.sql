-- CreateTable
CREATE TABLE "player" (
    "id" SERIAL NOT NULL,
    "Nome" TEXT NOT NULL,
    "Exp" INTEGER NOT NULL,

    CONSTRAINT "player_pkey" PRIMARY KEY ("id")
);
