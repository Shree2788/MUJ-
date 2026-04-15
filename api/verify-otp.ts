import twilio from "twilio";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { phone, code } = req.body;

    // Validate input
    if (!phone || !code) {
      return res.status(400).json({ error: "Phone and code required" });
    }

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    const verificationCheck = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SERVICE_SID)
      .verificationChecks.create({
        to: `+91${phone}`,
        code,
      });

    if (verificationCheck.status === "approved") {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ success: false, error: "Invalid OTP" });
    }

  } catch (error) {
    console.error("VERIFY ERROR:", error);

    return res.status(500).json({
      error: error.message || "Verification failed",
    });
  }
}
