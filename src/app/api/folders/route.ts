import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// Action to read
export const GET = async (req: NextRequest) => {
  const folders = await prisma.folders.findMany({});
  return NextResponse.json({
    folders,
  });
};

// Action to create
export const POST = async (req: NextRequest) => {
    const { name_assignment, due_date, class_type, description, assignment_type } = await req.json(); 
  
    const post = await prisma.folders.create({
      data: {
        name_assignment,
        due_date,
        class_type,
        description,
        assignment_type,
      },
    });

  return NextResponse.json({
    post,
  });
};

// Action to delete
export const DELETE = async (req: NextRequest) => {
  const url = new URL(req.url).searchParams;
  const id = Number(url.get("id")) || 0;

  const post = await prisma.folders.delete({
    where: {
      id: id,
    },
  });

  if (!post) {
    return NextResponse.json(
      {
        message: "Error tak bisa menghapus tugas",
      },
      {
        status: 500,
      }
    );
  }

  return NextResponse.json({});
};
