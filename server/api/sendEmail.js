import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  if (!event.req.body) {
    event.res.statusCode = 400;
    return;
  }

  const { name, email, message, consent } = event.req.body;

  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'notifications@formworkstudios.com',
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'notifications@formworkstudios.com',
    to: 'hello@formworkstudios.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nConsent: ${consent}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    event.res.statusCode = 200;
    event.res.end('Email sent');
  } catch (error) {
    console.error("Error sending email:", error);
    event.res.statusCode = 500;
    event.res.end('Failed to send email');
  }
});
