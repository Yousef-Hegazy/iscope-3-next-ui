import { NextRequest, NextResponse } from "next/server";
import { paginatedProjects } from "../../constant-data";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page"));

  return NextResponse.json({
    maxPages: 2,
    projects: request.headers.get("Accept-Language") === "ar" ? paginatedProjects.ar[page] : paginatedProjects.en[page],
  });
}
