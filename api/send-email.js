import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { name, email, subject, message } = req.body;

  // Setup mail transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
      <h2 style="color: #2d3748;">📬 New Contact Message</h2>
      <hr style="border: none; border-top: 1px solid #e2e8f0;" />

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Subject:</strong> ${subject}</p>

      <div style="margin-top: 20px;">
        <p><strong>Message:</strong></p>
        <p style="background-color: #f7fafc; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
      </div>

      <hr style="margin-top: 30px; border: none; border-top: 1px solid #e2e8f0;" />
      <p style="font-size: 12px; color: #718096;">This message was sent from the contact form on your website.</p>
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
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
