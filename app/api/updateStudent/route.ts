import { NextResponse, NextRequest } from "next/server";
import { updateStudent } from "../db";
import { Student } from "@/Models/Student";

export async function PUT(req: NextRequest) {
  const student: Student = await req.json();

  updateStudent(student);

  return NextResponse.json({ student: student }, { status: 201 });
}
