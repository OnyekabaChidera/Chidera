import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, firstName } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const name = firstName || "there";

    // 1. SAVE TO BREVO LIST 2 - for updates later
    await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey!,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        attributes: { FIRSTNAME: name },
        listIds: [2],
        updateEnabled: true,
      }),
    });

    // 2. SEND VAULT EMAIL IMMEDIATELY
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey!,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "LeadVaultsHub", email: "admin@leadvaultshub.com" },
        to: [{ email: email, name: name }],
        subject: "Your Vault Access - LeadVaultsHub",
        htmlContent: `
          <div style="font-family: Arial; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2>Hi ${name},</h2>
            <p>Thanks for joining LeadVaultsHub.</p>
            <p>Here is your access to the Training Vault:</p>
            <p style="text-align:center; margin: 30px 0;">
              <a href="https://leadvaultshub.com/vault" style="background: #000; color: #fff; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">Access The Vault →</a>
            </p>
            <p>Inside you will find templates, checklists and detailed walkthroughs.</p>
            <p>No spam, unsubscribe anytime.</p>
            <p>— Sandy<br>LeadVaultsHub</p>

            <!-- FOOTER UNDERNEATH - ONLY WORKING LINKS -->
            <br><br>
            <hr style="border:none; border-top:1px solid #eeeeee; margin:20px 0;">
            <p style="font-size:12px; color:#888888; text-align:center; line-height:1.8;">
              LeadVaultsHub · FCT, Abuja, Nigeria<br><br>
              <a href="{{ unsubscribe }}" style="color:#888888;">update your preferences</a> or <a href="{{ unsubscribe }}" style="color:#888888;">unsubscribe</a>
            </p>
          </div>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
