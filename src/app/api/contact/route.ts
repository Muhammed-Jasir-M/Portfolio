import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email & message are required fields.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Your Portfolio <onboarding@resend.dev>",
      to: "jasirmm307@gmail.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName || ""}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Service: ${service || "Not selected"}
        Message: ${message}
      `,
      html: `
      <div>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong>${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not selected"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      </div>
      `,
    });

    if (error) {
      console.log("Response:", { error });
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email. Please try again later.",
        },
        { status: 500 }
      );
    }

    if (data) {
      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });
    }
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "An error occurred while sending your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
