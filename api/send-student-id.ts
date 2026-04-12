import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, fullName, trustId, trustBranch, courseType } = req.body;

  if (!email || !fullName || !trustId) {
    return res.status(400).json({ error: 'email, fullName, and trustId are required' });
  }

  // Log to console always (useful in dev / AI Studio)
  console.log('------------------------------------------');
  console.log(`STUDENT REGISTRATION SUCCESS`);
  console.log(`Name    : ${fullName}`);
  console.log(`Email   : ${email}`);
  console.log(`Trust ID: ${trustId}`);
  console.log('------------------------------------------');

  const isPlaceholder =
    process.env.SMTP_USER?.includes('your-email') ||
    process.env.SMTP_PASS?.includes('your-gmail');

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || isPlaceholder) {
    console.log('[MOCK EMAIL] SMTP not configured — skipping email send.');
    return res.json({ success: true, mock: true });
  }

  try {
    await transporter.sendMail({
      from: `"PSS Trust" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Welcome to PSS Trust — Your Student ID',
      html: `
        <div style="font-family:sans-serif;padding:20px;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:12px;">
          
          <div style="background:#0f172a;padding:24px;border-radius:8px 8px 0 0;text-align:center;">
            <h1 style="color:#ffffff;margin:0;font-size:22px;letter-spacing:0.5px;">PSS Trust Student Portal</h1>
            <p style="color:#94a3b8;margin:6px 0 0;font-size:13px;">Potukuchi Somasundara Social Welfare & Charitable Trust</p>
          </div>

          <div style="padding:32px 24px;">
            <p style="color:#1e293b;font-size:16px;margin-top:0;">Dear <strong>${fullName}</strong>,</p>
            <p style="color:#475569;font-size:15px;line-height:1.6;">
              Congratulations! Your registration with PSS Trust has been completed successfully.
              Please save your <strong>Student ID</strong> — you will need it for attendance, fee applications, and checking your status.
            </p>

            <div style="background:#f0fdf4;border:2px solid #86efac;border-radius:10px;padding:24px;text-align:center;margin:28px 0;">
              <p style="color:#166534;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">Your Student ID</p>
              <p style="color:#15803d;font-size:32px;font-weight:900;letter-spacing:4px;margin:0;">${trustId}</p>
            </div>

            <table style="width:100%;border-collapse:collapse;font-size:14px;color:#475569;margin-bottom:24px;">
              <tr style="border-bottom:1px solid #f1f5f9;">
                <td style="padding:10px 4px;font-weight:600;color:#1e293b;width:40%;">Trust Branch</td>
                <td style="padding:10px 4px;">${trustBranch}</td>
              </tr>
              <tr style="border-bottom:1px solid #f1f5f9;">
                <td style="padding:10px 4px;font-weight:600;color:#1e293b;">Course Type</td>
                <td style="padding:10px 4px;">${courseType === 'btech' ? 'B.Tech' : 'Diploma'}</td>
              </tr>
              <tr>
                <td style="padding:10px 4px;font-weight:600;color:#1e293b;">Registered Email</td>
                <td style="padding:10px 4px;">${email}</td>
              </tr>
            </table>

            <div style="background:#fefce8;border-left:4px solid #fbbf24;padding:14px 16px;border-radius:4px;margin-bottom:24px;">
              <p style="margin:0;color:#92400e;font-size:13px;">
                <strong>Important:</strong> Please keep your Student ID safe. You will need it every time you mark attendance or submit a fee application.
              </p>
            </div>

            <p style="color:#64748b;font-size:14px;">
              Your next step is to complete your <strong>Face Registration</strong> so you can use the daily attendance feature.
            </p>
          </div>

          <div style="background:#f8fafc;padding:16px 24px;border-radius:0 0 8px 8px;border-top:1px solid #e2e8f0;text-align:center;">
            <p style="color:#94a3b8;font-size:12px;margin:0;">
              This is an automated message from PSS Trust. Please do not reply to this email.<br/>
              © ${new Date().getFullYear()} Potukuchi Somasundara Social Welfare & Charitable Trust
            </p>
          </div>

        </div>
      `,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error('Error sending student ID email:', err);
    // Return success anyway — registration already completed, email is best-effort
    return res.json({ success: true, emailError: true });
  }
}
