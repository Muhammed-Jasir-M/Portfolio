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

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>

      <body style="font-family: 'Segoe UI', Verdana, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #2d2d2d; color: white; padding: 25px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
            </div>
            
            <div style="padding: 30px 25px;">
              <div style="margin-bottom: 20px;">
                <span style="display: block; font-weight: 600; margin-bottom: 5px; color: #555; font-size: 14px; text-transform: uppercase;">Name</span>
                <div style="font-size: 16px; line-height: 1.5; color: #333; background-color: #f9f9f9; border-left: 4px solid #2d2d2d; padding: 10px 15px; border-radius: 0 4px 4px 0;">${firstName} ${lastName || ""}</div>
              </div>
              
              <div style="margin-bottom: 20px;">
                <span style="display: block; font-weight: 600; margin-bottom: 5px; color: #555; font-size: 14px; text-transform: uppercase;">Email</span>
                <div style="font-size: 16px; line-height: 1.5; color: #333; background-color: #f9f9f9; border-left: 4px solid #2d2d2d; padding: 10px 15px; border-radius: 0 4px 4px 0;">${email}</div>
              </div>
              
              <div style="margin-bottom: 20px;">
                <span style="display: block; font-weight: 600; margin-bottom: 5px; color: #555; font-size: 14px; text-transform: uppercase;">Phone</span>
                <div style="font-size: 16px; line-height: 1.5; color: #333; background-color: #f9f9f9; border-left: 4px solid #2d2d2d; padding: 10px 15px; border-radius: 0 4px 4px 0;">${phone || "Not provided"}</div>
              </div>
              
              <div style="margin-bottom: 20px;">
                <span style="display: block; font-weight: 600; margin-bottom: 5px; color: #555; font-size: 14px; text-transform: uppercase;">Service</span>
                <div style="font-size: 16px; line-height: 1.5; color: #333; background-color: #f9f9f9; border-left: 4px solid #2d2d2d; padding: 10px 15px; border-radius: 0 4px 4px 0;">${service || "Not selected"}</div>
              </div>
              
              <div style="margin-bottom: 20px;">
                <span style="display: block; font-weight: 600; margin-bottom: 5px; color: #555; font-size: 14px; text-transform: uppercase;">Message</span>
                <div style="font-size: 16px; line-height: 1.5; color: #333; background-color: #f9f9f9; border-left: 4px solid #2d2d2d; padding: 10px 15px; border-radius: 0 4px 4px 0; min-height: 100px; white-space: pre-line;">${message.replace(/\n/g, "<br/>")}</div>
              </div>
            </div>
            
            <div style="background-color: #f4f4f4; text-align: center; padding: 15px; font-size: 14px; color: #777;">
              <p style="margin: 0;">This message was sent from your portfolio contact form.</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Jasir's Portfolio <onboarding@resend.dev>",
      to: "jasirmm307@gmail.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName || ""}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Service: ${service || "Not selected"}
        Message: ${message}
      `,
      html: htmlContent,
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
