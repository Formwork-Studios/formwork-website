const { createClient } = require("@supabase/supabase-js");
const nodemailer = require("nodemailer");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

module.exports = async (req, res) => {
  const { data: subscription, error } = await supabase
    .from("blogFollows")
    .on("INSERT", async (payload) => {
      const transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
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
