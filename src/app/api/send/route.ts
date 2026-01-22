import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const EmailSchema = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    // 1. Check if API Key is set
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Missing RESEND_API_KEY in environment variables." },
        { status: 500 }
      );
    }

    const body = await req.json();

    // 2. Validate input with Zod
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = EmailSchema.safeParse(body);

    if (!zodSuccess) {
      return Response.json({ error: zodError?.message }, { status: 400 });
    }

    // 3. Send Email
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Fixed typo: Porfolio -> Portfolio
      to: [config.email], // Sends to meetmdsagorkhan@gmail.com
      subject: `New Contact from ${zodData.fullName}`, // Personalized subject line
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }),
    });

    if (resendError) {
      console.error("Resend Error:", resendError);
      return Response.json({ error: resendError }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error) {
    console.error("Server Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}