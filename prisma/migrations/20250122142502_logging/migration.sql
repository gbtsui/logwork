-- CreateTable
CREATE TABLE "Log"
(
    "id"          INTEGER       NOT NULL,
    "owner_id"    INTEGER       NOT NULL,
    "log_content" VARCHAR(1023) NOT NULL,
    "log_time"    INTEGER       NOT NULL,
    "created_at"  TIMESTAMP(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogSummary"
(
    "id"         INTEGER       NOT NULL,
    "owner_id"   INTEGER       NOT NULL,
    "content"    VARCHAR(1023) NOT NULL,
    "created_at" TIMESTAMP(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LogSummary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Log"
    ADD CONSTRAINT "Log_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LogSummary"
    ADD CONSTRAINT "LogSummary_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;
