-- CreateTable
CREATE TABLE "beasiswa" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nomorhp" TEXT NOT NULL,
    "semester" INTEGER NOT NULL,
    "ipk" DOUBLE PRECISION NOT NULL,
    "pilbe" TEXT NOT NULL,
    "upload" TEXT NOT NULL,

    CONSTRAINT "beasiswa_pkey" PRIMARY KEY ("id")
);
