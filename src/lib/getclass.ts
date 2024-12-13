"use server"

import {prisma} from "@/lib/db"

export const getkelas = async () => {
    try {
        const kelas = await prisma.kelas.findMany();
        return kelas;
    } catch (error) {
        throw new Error("Failed to fetch folder data");
    }
}

export const countClassFolders = async () => { 
    try {
        const kelasCount = await prisma.kelas.count(); 
        return kelasCount; 
    } catch (error) {
        throw new Error("Failed to count assignment folders");
    }
}

