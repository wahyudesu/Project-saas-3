"use server"

import {prisma} from "@/lib/db"

export const getdocument = async (name_folder?: string) => { 
    try {
        const documents = await prisma.document.findMany({
            where: name_folder ? { folder: name_folder } : undefined,
        }); 
        return documents; 
    } catch (error) {
        throw new Error("Failed to fetch documents");
    }
}
