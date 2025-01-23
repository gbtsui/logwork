/*
  Warnings:

  - Added the required column `productivity_rating` to the `Log` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Log"
    ADD COLUMN "productivity_rating" INTEGER NOT NULL;
