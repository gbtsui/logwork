-- AlterTable
ALTER TABLE "User"
    ADD COLUMN "userStatisticOwner_id" INTEGER;

-- CreateTable
CREATE TABLE "UserStatistic"
(
    "owner_id" INTEGER NOT NULL,

    CONSTRAINT "UserStatistic_pkey" PRIMARY KEY ("owner_id")
);

-- AddForeignKey
ALTER TABLE "UserStatistic"
    ADD CONSTRAINT "UserStatistic_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
