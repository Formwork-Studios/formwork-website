const nodemailer = require("nodemailer");
const { serverSupabaseClient } = require("#supabase/server");

export default async (req, res) => {
  const client = await serverSupabaseClient(req);

  const { data: subscription, error } = await client
    .from("blogFollows")
    .on("INSERT", async (payload) => {
      const transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'notifications@formworkstudios.com',
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: 'notifications@formworkstudios.com',
        to: 'hello@formworkstudios.com',
        subject: "New Signup",
        text: `New user: ${JSON.stringify(payload.new)}`,
      };

      await transporter.sendMail(mailOptions);
    })
    .subscribe();

  res.status(200).send("Notification setup complete.");
};
