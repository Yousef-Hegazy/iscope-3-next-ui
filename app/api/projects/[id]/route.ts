import { NextRequest, NextResponse } from "next/server";
import { paginatedProjects } from "../constant-data";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const projects = paginatedProjects[request.headers.get("Accept-Language") || "ar"];

  for (const [key, val] of Object.entries(projects)) {
    for (const project of val) {
      if (project.id === id) {
        return NextResponse.json(project);
      }
    }
  }

  return NextResponse.json({ message: "Not found" }, { status: 404 });
}
