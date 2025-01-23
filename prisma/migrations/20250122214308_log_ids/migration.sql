-- AlterTable
CREATE SEQUENCE log_id_seq;
ALTER TABLE "Log"
    ALTER COLUMN "id" SET DEFAULT nextval('log_id_seq');
ALTER SEQUENCE log_id_seq OWNED BY "Log"."id";

-- AlterTable
CREATE SEQUENCE logsummary_id_seq;
ALTER TABLE "LogSummary"
    ALTER COLUMN "id" SET DEFAULT nextval('logsummary_id_seq');
ALTER SEQUENCE logsummary_id_seq OWNED BY "LogSummary"."id";
