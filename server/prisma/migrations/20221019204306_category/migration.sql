/*
  Warnings:

  - Added the required column `category` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('GENERAL', 'EVENTS', 'NEWBIES');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "category" "Category" NOT NULL;
