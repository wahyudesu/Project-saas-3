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