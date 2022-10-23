-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "betType" TEXT NOT NULL,
    "minBet" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "desc" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);
