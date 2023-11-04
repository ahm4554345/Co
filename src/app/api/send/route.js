// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_WETtUZUL_PetCGc5W3TcdXKRHRLhjemN4");
// const resend = new Resend(process.env.CT_EMAIL);
const fromEmail = process.env.ApiKey;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.Email,
      // to: process.env.CT_KEY,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
