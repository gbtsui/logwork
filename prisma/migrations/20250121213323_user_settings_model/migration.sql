/*
  Warnings:

  - You are about to drop the column `dueSoonThreshold` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "dueSoonThreshold";

-- CreateTable
CREATE TABLE "UserSettings"
(
    "owner_id"           INTEGER NOT NULL,
    "due_soon_threshold" INTEGER NOT NULL DEFAULT 3600000,

    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("owner_id")
);

-- AddForeignKey
ALTER TABLE "UserSettings"
    ADD CONSTRAINT "UserSettings_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
