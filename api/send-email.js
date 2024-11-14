// client/api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Define allowed origin for CORS (replace with your specific domain if needed)
  const allowedOrigin = 'baileykh.dev';

  // Add CORS headers to the response
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end(); // Respond OK to preflight requests
    return;
  }

  // Handle the POST request
  if (req.method === 'POST') {
    const { first_name, last_name, email } = req.body;
    const name = `${first_name} ${last_name}`;

    try {
      // Send confirmation email to the user
      await resend.emails.send({
        from: 'hen.baileyk@gmail.com',
        to: email,
        subject: 'Thank you for your message',
        html: `<p>Dear ${name},</p><p>Thank you for reaching out. We have received your message.</p>`,
      });

      // Send notification email to the client
      await resend.emails.send({
        from: email,
        to: 'hen.baileyk@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `<p>You have received a new message from ${name} (${email}).</p>`,
      });

      res.status(200).json({ status: 'Emails sent successfully' });
    } catch (error) {
      console.error('Error sending emails:', error);
      res.status(500).json({ error: 'Error sending emails' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
