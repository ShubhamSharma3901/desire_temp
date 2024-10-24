import { getPhotosDesire } from "@/sanity/lib/sanity.query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const photos = await getPhotosDesire();

    return NextResponse.json(photos, { status: 200 });
  } catch (err) {
    console.log("Photos GET Route Error=== ", err);
    return NextResponse.json(`Cannot GET Photos: ${err}`, { status: 401 });
  }
}
