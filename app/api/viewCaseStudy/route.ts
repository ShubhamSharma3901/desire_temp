import {
  getBlogBySlug,
  getBlogs,
  getCaseStudiesBySlug,
} from "@/sanity/lib/sanity.query";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const slug = headers().get("slug");
  try {
    if (slug) {
      const caseStudy = await getCaseStudiesBySlug(slug);
      // console.log(caseStudy);
      return NextResponse.json(caseStudy, { status: 200 });
    }
    return NextResponse.json("Case Study Not Found", { status: 404 });
  } catch (err) {
    console.log("Case Study GET Route Error=== ", err);
    return NextResponse.json(`Cannot GET Case Study: ${err}`, { status: 401 });
  }
}
