import { getJobs } from "@/sanity/lib/sanity.query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const jobs = await getJobs();
    console.log(jobs);
    return NextResponse.json(jobs, { status: 200 });
  } catch (err) {
    console.log("Jobs GET Route Error=== ", err);
    return NextResponse.json(`Cannot GET Jobs: ${err}`, { status: 401 });
  }
}
