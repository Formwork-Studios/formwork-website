const { createClient } = require("@supabase/supabase-js");
const nodemailer = require("nodemailer");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

module.exports = async (req, res) => {
  const { data: subscription, error } = await supabase
    .from("blogFollows")
    .on("INSERT", async (payload) => {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL,
        to: "hello@formworkstudios.com",
        subject: "New Signup",
        text: `New user: ${JSON.stringify(payload.new)}`,
      };

      await transporter.sendMail(mailOptions);
    })
    .subscribe();

  res.status(200).send("Notification setup complete.");
};
