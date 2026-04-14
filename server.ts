import express from 'express';
import { createServer as createViteServer } from 'vite';
import twilio from 'twilio';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // Twilio endpoints
  app.post('/api/send-otp', async (req, res) => {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ error: 'Phone number is required' });

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!accountSid || !authToken || !serviceSid) {
      return res.status(500).json({ error: 'Twilio credentials not configured on server' });
    }

    try {
      const client = twilio(accountSid, authToken);
      const verification = await client.verify.v2.services(serviceSid)
        .verifications
        .create({ to: phone, channel: 'sms' });
      
      res.json({ success: true, status: verification.status });
    } catch (error: any) {
      console.error('Twilio Send OTP Error:', error);
      res.status(500).json({ error: error.message || 'Failed to send OTP' });
    }
  });

  app.post('/api/verify-otp', async (req, res) => {
    const { phone, code } = req.body;
    if (!phone || !code) return res.status(400).json({ error: 'Phone and code are required' });

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID;

    if (!accountSid || !authToken || !serviceSid) {
      return res.status(500).json({ error: 'Twilio credentials not configured on server' });
    }

    try {
      const client = twilio(accountSid, authToken);
      const verificationCheck = await client.verify.v2.services(serviceSid)
        .verificationChecks
        .create({ to: phone, code });
      
      if (verificationCheck.status === 'approved') {
        res.json({ success: true });
      } else {
        res.status(400).json({ success: false, error: 'Invalid or expired OTP' });
      }
    } catch (error: any) {
      console.error('Twilio Verify OTP Error:', error);
      res.status(500).json({ error: error.message || 'Failed to verify OTP' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
