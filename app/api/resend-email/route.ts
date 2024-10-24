import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type emailType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const body: emailType = await req.json();
    const email = await resend.emails.send({
      from: "Query<onboarding@resend.dev>",
      cc: "",
      to: "shubham03901@gmail.com",
      subject: `${body.subject}`,
      html: `<p>Name:${body.name}</p><p>Email:${body.email}</p><p>Query:${body.message}</p>`,
      // headers: {
      //   "Access-Control-Allow-Origin": "no-cors",
      // },
    });
    if (email.data) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false });
  } catch (e) {
    console.log("Resend API Error AT [/API/RESEND-EMAIL]: ", e);
    return NextResponse.json({ success: false });
  }
}
