// "use server"

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const savefolders = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  console.log(data)
  try {
      await prisma.folders.create({
          data: {
              name_assignment: data.name_assignment as string,
              created_at: new Date(data.created_at as string),
              due_date: new Date(data.due_date as string),
              class_type: data.kelas as string,
              description: data.description as string,
              assignment_type: data.assignment_type as string
          }
      });
  } catch (error) {
      console.error("Error creating folder:", error);
      throw new Error("Failed to create folder");
  }
  revalidatePath("/assignment");
  // redirect("/assignment");
}

export async function uploadassignment(formData: FormData): Promise<any> {
  //Mengambil file dan input
  const file = formData.get("file") as File | null;
  const nameStudent = formData.get("nameStudent") as string;

  if (!file || !nameStudent) {
    throw new Error("Incomplete form data");
  }
  // Kirim file ke API
  try {
    const flaskResponse = await fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    });

    if (!flaskResponse.ok) {
      const errorData = await flaskResponse.json();
      throw new Error(errorData.error || "Failed to upload file to Flask API");
    }
    console.log(flaskResponse)
    // Mengambil Dokumen url
    const { data } = await supabase.storage
      .from('Pdf document homework')
      .getPublicUrl(file.name, { download: true });

    const publicUrl: string = data?.publicUrl || '';
    console.log('Public URL:', publicUrl);

    // Simpan data ke database documents
    const { data: documentData, error: documentError } = await supabase
      .from("document") // Pastikan nama tabel di Supabase adalah "documents"
      .insert([
        {
          nameStudent: nameStudent,
          documentName: file.name,
          documentType: file.type,
          documentUrl: publicUrl,
          uploadedDate: new Date(),
        },
      ]);

      if (documentError) {
        throw new Error(`Failed to save document metadata: ${documentError.message}`);
      }
  
      return { document: documentData, publicUrl }; // Return document metadata dan URL
    } catch (error) {
      console.error("Error in uploadassignment:", error);
      throw error;
    }
  }