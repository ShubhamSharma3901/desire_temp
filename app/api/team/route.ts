import { getTeam } from "@/sanity/lib/sanity.query";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const team = await getTeam();
    console.log(team);
    return NextResponse.json(team, { status: 200 });
  } catch (err) {
    console.log("Team GET Route Error=== ", err);
    return NextResponse.json(`Cannot GET Team: ${err}`, { status: 401 });
  }
}
