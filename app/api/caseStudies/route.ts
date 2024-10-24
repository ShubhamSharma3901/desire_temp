import { getBlogs, getCaseStudies } from "@/sanity/lib/sanity.query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const caseStudies = await getCaseStudies();
    // console.log(caseStudies);
    return NextResponse.json(caseStudies, { status: 200 });
  } catch (err) {
    console.log("Blogs GET Route Error=== ", err);
    return NextResponse.json(`Cannot GET Case Studies: ${err}`, {
      status: 401,
    });
  }
}
