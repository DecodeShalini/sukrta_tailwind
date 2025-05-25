import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 30px; background-color: #ffffff;">
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="cid:sukrtaLogo" alt="Sukrta Technology Logo" style="max-width: 180px;" />
      </div>

      <h2 style="color: #2d3748;">📬 New Message from Sukrta Technology Website</h2>
      <p style="font-size: 16px; color: #4a5568;">You have received a new contact request with the following details:</p>

      <table style="width: 100%; margin-top: 20px; font-size: 15px; color: #2d3748;">
        <tr>
          <td style="font-weight: bold; padding: 8px 0;">Name:</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px 0;">Email:</td>
          <td><a href="mailto:${email}" style="color: #3182ce;">${email}</a></td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px 0;">Subject:</td>
          <td>${subject}</td>
        </tr>
      </table>

      <div style="margin-top: 30px;">
        <p style="font-weight: bold; color: #2d3748;">Message:</p>
        <div style="background-color: #f7fafc; padding: 15px; border-left: 4px solid #3182ce; border-radius: 5px;">
          ${message.replace(/\n/g, "<br>")}
        </div>
      </div>

      <hr style="margin: 40px 0; border: none; border-top: 1px solid #e2e8f0;" />
      <p style="font-size: 12px; color: #718096; text-align: center;">
        This message was sent from the contact form on the <strong>Sukrta Technology</strong> website.<br>
        If you received this email in error, please disregard it.
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
      html: htmlContent,
      attachments: [
        {
          filename: "sukrtaLogo.png",
          path: "./public/sukrtaLogo.png",
          cid: "sukrtaLogo" // same CID as used in the img src above
        }
      ]
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
