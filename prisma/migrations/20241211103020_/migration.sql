-- CreateTable
CREATE TABLE "files" (
    "id" SERIAL NOT NULL,
    "folder_slug" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "file_url" TEXT NOT NULL,
    "uploaded_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "folders" (
    "id" SERIAL NOT NULL,
    "name_assignment" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "due_date" TIMESTAMP(3),
    "class_type" TEXT,
    "description" TEXT,
    "assignment_type" TEXT,

    CONSTRAINT "folders_pkey" PRIMARY KEY ("id")
);
