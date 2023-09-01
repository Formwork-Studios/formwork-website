import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
<<<<<<< HEAD
  const body = await readBody(event);
  const { email, topic, name, message, consent } = body;

  console.log(`Email: ${email}`);
  console.log(`Topic: ${topic}`);
  console.log(`Name: ${name}`);
  console.log(`Message: ${message}`);
  console.log(`Consent: ${consent}`);

  let transporter = nodemailer.createTransport({
=======
  if (!event.req.body) {
    event.res.statusCode = 400;
    return;
  }

  const { name, email, message, consent } = event.req.body;

  const transporter = nodemailer.createTransport({
>>>>>>> 4677056240244532fa93ef67a592155bafb8fc7f
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'notifications@formworkstudios.com',
<<<<<<< HEAD
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let mailOptions = {
    from: 'notifications@formworkstudios.com',
    to: 'hello@formworkstudios.com',
    subject: topic,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nConsent: ${consent}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
=======
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
>>>>>>> 4677056240244532fa93ef67a592155bafb8fc7f
});
