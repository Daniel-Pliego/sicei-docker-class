import { Student } from "@/Models/Student";
import { NextResponse, NextRequest } from "next/server";
import { getStudents } from "../db";

export async function GET(request: Request) {
  let students: Student[] = getStudents();

  return NextResponse.json(students);
}
