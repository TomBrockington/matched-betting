/*
  Warnings:

  - Added the required column `potentialProfit` to the `Link` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qualifyingBet` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "potentialProfit" INTEGER NOT NULL,
ADD COLUMN     "qualifyingBet" INTEGER NOT NULL;
