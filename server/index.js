import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app  = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
const isProd     = process.env.NODE_ENV === 'production';

// ─── Middleware ─────────────────────────────────────────────────────
// In dev, allow Vite dev server. In prod, same origin so no CORS needed.
if (!isProd) {
  app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  }));
}
app.use(express.json());

// ─── Serve React build in production ────────────────────────────────
if (isProd) {
  const distPath = path.join(__dirname, 'public');
  app.use(express.static(distPath));
}

// ─── Nodemailer Transporter ─────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ─── Health Check ───────────────────────────────────────────────────
if (!isProd) {
  app.get('/health', (req, res) => {
    res.json({ status: 'Silambam Portfolio Server is running ⚔' });
  });
}

// ─── Contact Form Route ─────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { name, contact, message } = req.body;

  if (!name || !contact || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }
  if (name.length > 100 || contact.length > 100 || message.length > 2000) {
    return res.status(400).json({ success: false, error: 'Input too long.' });
  }

  const mailToCoach = {
    from: `"Silambam Portfolio" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New Enquiry from ${name} — Silambam Academy`,
    html: `
      <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;background:#0f0a05;color:#f5edd8;padding:2rem;border:1px solid #c9922a44;border-radius:4px;">
        <h2 style="color:#f0c060;font-size:1.3rem;border-bottom:1px solid #c9922a33;padding-bottom:1rem;margin-bottom:1.5rem;">⚔ New Student Enquiry</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:0.6rem 0;color:#7a6840;font-size:0.85rem;width:120px;text-transform:uppercase;letter-spacing:0.1em;">Name</td><td style="padding:0.6rem 0;color:#f5edd8;font-weight:bold;">${name}</td></tr>
          <tr><td style="padding:0.6rem 0;color:#7a6840;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.1em;">Contact</td><td style="padding:0.6rem 0;color:#f5edd8;">${contact}</td></tr>
          <tr><td style="padding:0.6rem 0;color:#7a6840;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.1em;vertical-align:top;">Message</td><td style="padding:0.6rem 0;color:#f5edd8;line-height:1.6;">${message.replace(/\n/g, '<br>')}</td></tr>
        </table>
        <p style="margin-top:2rem;font-size:0.8rem;color:#7a6840;border-top:1px solid #c9922a22;padding-top:1rem;">Sent from your Silambam Portfolio website</p>
      </div>`,
  };

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const mailToUser = isEmail ? {
    from: `"Silambam Academy" <${process.env.EMAIL_USER}>`,
    to: contact,
    subject: 'Thank you for your enquiry — Silambam Academy',
    html: `
      <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;background:#0f0a05;color:#f5edd8;padding:2rem;border:1px solid #c9922a44;border-radius:4px;">
        <h2 style="color:#f0c060;font-size:1.3rem;margin-bottom:1rem;">⚔ Thank You, ${name}!</h2>
        <p style="color:#c0ad88;line-height:1.7;">Thank you for reaching out to Silambam Academy. I have received your message and will get back to you as soon as possible.</p>
        <p style="color:#c0ad88;line-height:1.7;margin-top:1rem;">Feel free to follow on Instagram or WhatsApp for a faster response.</p>
        <p style="margin-top:2rem;color:#f0c060;font-style:italic;">— Silambam Academy Coach</p>
        <p style="margin-top:2rem;font-size:0.8rem;color:#7a6840;border-top:1px solid #c9922a22;padding-top:1rem;">This is an automated confirmation. Please do not reply.</p>
      </div>`,
  } : null;

  try {
    await transporter.sendMail(mailToCoach);
    if (mailToUser) await transporter.sendMail(mailToUser);
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Email error:', err.message);
    return res.status(500).json({ success: false, error: 'Failed to send email. Please try again.' });
  }
});

// ─── SPA Fallback — MUST be last ────────────────────────────────────
// Any route not matched by /api/* sends back the React index.html
if (isProd) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
}

// ─── Start Server ───────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n⚔  Silambam running at http://localhost:${PORT}  [${isProd ? 'PRODUCTION' : 'DEVELOPMENT'}]\n`);
});
