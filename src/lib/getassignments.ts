"use server"

import {prisma} from "@/lib/db"

export const getfolders = async () => {
    try {
        const folders = await prisma.folders.findMany();
        return folders;
    } catch (error) {
        throw new Error("Failed to fetch folder data");
    }
}

export const countAssignmentFolders = async () => { 
    try {
        const folderCount = await prisma.folders.count(); 
        return folderCount; 
    } catch (error) {
        throw new Error("Failed to count assignment folders");
    }
}

export const gettypedocument = async (name_folder?: string) => { 
    try {
        const assignmentType = await prisma.folders.findFirst({
            where: { name_assignment: name_folder },
            select: { assignment_type: true },
        }); 
        return assignmentType?.assignment_type; 
    } catch (error) {
        throw new Error("Failed to fetch assignment type");
    }
}

export const getinformation = async (name_folder: string) => {
    try {
      // Cari folder berdasarkan name_assignment dan ambil semua datanya
      const folder = await prisma.folders.findFirst({
        where: {
          name_assignment: name_folder,
        },
      });
  
      // Kembalikan data folder (null jika tidak ditemukan)
      return folder || null;
    } catch (error) {
      console.error("Error fetching folder by name:", error);
      throw new Error("Failed to fetch folder data");
    }
  }