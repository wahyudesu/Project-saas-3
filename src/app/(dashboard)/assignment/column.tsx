"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Folder = { // Changed from Payment to Folder
    id: number // Updated to match the folders model
    name_assignment: string // Added to match the folders model
    created_at?: Date // Added to match the folders model
    due_date?: Date // Added to match the folders model
    class_type?: string // Added to match the folders model
    description?: string // Added to match the folders model
    assignment_type?: string // Added to match the folders model
  }

  export const columns: ColumnDef<Folder>[] = [
    {
      accessorKey: "name_assignment", // Menggunakan name_assignment
      header: "Assignment Name", // Judul kolom
    },
    {
      accessorKey: "created_at", // Menggunakan created_at
      header: "Created At", // Judul kolom
    },
    {
      accessorKey: "due_date", // Menggunakan due_date
      header: "Due Date", // Judul kolom
    },
    {
      accessorKey: "class_type", // Menambahkan class_type
      header: "Class Type", // Judul kolom
    },
    {
      accessorKey: "description", // Menambahkan description
      header: "Description", // Judul kolom
    },
    {
      accessorKey: "assignment_type", // Menambahkan assignment_type
      header: "Assignment Type", // Judul kolom
    },
  ]