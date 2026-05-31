import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectInterest, message } = body;

    // Validate inputs
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone)" },
        { status: 400 }
      );
    }

    // Configure SMTP transporter from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // true for port 465
      auth: {
        user: process.env.SMTP_USER || "info@swapnosiribuilders.com",
        pass: process.env.SMTP_PASS, // Loaded securely from env
      },
    });

    // Luxury HTML Email Template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Swapnosiri Builders Ltd. - New Luxury Inquiry</title>
          <style>
            body {
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              background-color: #08060f;
              color: #F8F8F6;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 40px auto;
              background-color: #140f2a;
              border: 1px solid rgba(212, 175, 55, 0.2);
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
            }
            .header {
              background: linear-gradient(135deg, #1D4ED8 0%, #5B21B6 100%);
              padding: 40px;
              text-align: center;
              border-bottom: 2px solid #D4AF37;
            }
            .header h1 {
              font-size: 24px;
              font-weight: 700;
              letter-spacing: 2px;
              text-transform: uppercase;
              color: #FFFFFF;
              margin: 0 0 10px 0;
            }
            .header p {
              color: #D4AF37;
              font-size: 12px;
              letter-spacing: 3px;
              text-transform: uppercase;
              margin: 0;
            }
            .content {
              padding: 40px;
            }
            .section-title {
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 2px;
              color: #D4AF37;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
              padding-bottom: 8px;
              margin-top: 0;
              margin-bottom: 20px;
            }
            .grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 16px;
              margin-bottom: 30px;
            }
            .field-box {
              background-color: rgba(255, 255, 255, 0.02);
              border: 1px solid rgba(255, 255, 255, 0.06);
              border-radius: 8px;
              padding: 16px;
            }
            .field-label {
              font-size: 10px;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #a0aec0;
              margin-bottom: 6px;
            }
            .field-value {
              font-size: 16px;
              color: #FFFFFF;
              font-weight: 500;
            }
            .message-box {
              background-color: rgba(255, 255, 255, 0.02);
              border: 1px solid rgba(255, 255, 255, 0.06);
              border-radius: 8px;
              padding: 20px;
              margin-bottom: 30px;
              line-height: 1.6;
              font-size: 14px;
              color: #E2E8F0;
              white-space: pre-wrap;
            }
            .footer {
              background-color: #08060f;
              padding: 30px;
              text-align: center;
              font-size: 11px;
              color: #718096;
              border-top: 1px solid rgba(255, 255, 255, 0.05);
            }
            .footer a {
              color: #D4AF37;
              text-decoration: none;
            }
            .cta-button {
              display: inline-block;
              background-color: #D4AF37;
              color: #FFFFFF;
              text-transform: uppercase;
              letter-spacing: 2px;
              font-size: 12px;
              font-weight: bold;
              padding: 14px 28px;
              border-radius: 8px;
              text-decoration: none;
              margin-top: 10px;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Swapnosiri Builders Ltd.</h1>
              <p>New Luxury Real Estate Inquiry</p>
            </div>
            <div class="content">
              <h2 class="section-title">Buyer Profile</h2>
              
              <div class="grid">
                <div class="field-box">
                  <div class="field-label">Full Name</div>
                  <div class="field-value">${name}</div>
                </div>
                <div class="field-box">
                  <div class="field-label">Email Address</div>
                  <div class="field-value">${email}</div>
                </div>
                <div class="field-box">
                  <div class="field-label">Phone / WhatsApp Number</div>
                  <div class="field-value">${phone}</div>
                </div>
                <div class="field-box">
                  <div class="field-label">Project of Interest</div>
                  <div class="field-value" style="color: #D4AF37;">${projectInterest}</div>
                </div>
              </div>

              <h2 class="section-title">Special Requirements / Message</h2>
              <div class="message-box">
                ${message ? message : "No special message provided. Client requested a direct phone callback."}
              </div>

              <div style="text-align: center;">
                <a href="mailto:${email}" class="cta-button">Reply Directly to Client</a>
              </div>
            </div>
            <div class="footer">
              <p>This inquiry was securely generated via the Swapnosiri Builders Portal.</p>
              <p>&copy; 2026 <a href="https://swapnosiribuilders.com">Swapnosiri Builders Ltd.</a> All Rights Reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Setup mail parameters
    const mailOptions = {
      from: `"SBL Luxury Portal" <${process.env.SMTP_USER || "info@swapnosiribuilders.com"}>`,
      to: process.env.SMTP_USER || "info@swapnosiribuilders.com",
      cc: process.env.SMTP_CC || "sshahbuddin@gmail.com",
      replyTo: email, // Extremely helpful: allows admin to click reply and directly mail the customer
      subject: `[New Inquiry] - ${name} - ${projectInterest}`,
      text: `New luxury inquiry received from ${name} (${email}, ${phone}) interested in: ${projectInterest}. Message: ${message}`,
      html: htmlContent,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Nodemailer Email Submission Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
