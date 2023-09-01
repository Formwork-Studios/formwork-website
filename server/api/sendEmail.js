import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {

  const body = await readBody(event);
  const { email, topic, name, message, consent } = body;

  console.log(`Email: ${email}`);
  console.log(`Topic: ${topic}`);
  console.log(`Name: ${name}`);
  console.log(`Message: ${message}`);
  console.log(`Consent: ${consent}`);

  let transporter = nodemailer.createTransport({

    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'notifications@formworkstudios.com',

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

});
