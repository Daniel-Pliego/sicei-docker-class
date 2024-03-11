import { NextResponse, NextRequest } from "next/server";
import { deleteStudent } from "../db";

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  deleteStudent(id);

  return NextResponse.json(
    { response: `stundent with id: ${id} has been succesfuly deleted` },
    { status: 201 }
  );
}
