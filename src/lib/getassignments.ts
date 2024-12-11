"use server"

import {prisma} from "@/lib/db"

export const getfolders = async () =>{
    try {
        const folders = await prisma.folders.findMany();
        return folders;
    }   catch (error) {
        throw new Error("Failed to fetch folder data")
    }
}

