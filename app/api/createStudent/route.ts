import { NextResponse, NextRequest } from "next/server";
import { createStudent } from "../db";
import { Student } from "@/Models/Student";
import { z } from "zod";

const formSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export async function POST(req: NextRequest) {
  const student: Student = await req.json();

  formSchema.parse(student);

  createStudent(student);

  return NextResponse.json({ student: student }, { status: 201 });
}
