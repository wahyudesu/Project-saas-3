/*
  Warnings:

  - You are about to drop the `files` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "files";

-- CreateTable
CREATE TABLE "document" (
    "id" SERIAL NOT NULL,
    "nameStudent" TEXT NOT NULL,
    "documentName" TEXT NOT NULL,
    "documentUrl" TEXT NOT NULL,
    "folder" TEXT NOT NULL,
    "uploadedDate" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "document_pkey" PRIMARY KEY ("id")
);
