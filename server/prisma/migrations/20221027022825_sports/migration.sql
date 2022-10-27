-- CreateTable
CREATE TABLE "Sportevent" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "sportType" TEXT NOT NULL,
    "betTypes" TEXT[],
    "competitors" TEXT[],

    CONSTRAINT "Sportevent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sportevent_title_key" ON "Sportevent"("title");
