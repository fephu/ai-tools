import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "elkelkph@gmail.com",
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

export const sendKey = async (email: string, key: string) => {
  await transporter.sendMail({
    from: "sender@server.com",
    to: `${email}`,
    subject: "Message title",
    text: "Plaintext version of the message",
    html: `<p>${key}</p>`,
  });
};
