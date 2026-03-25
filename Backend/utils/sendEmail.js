import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


// Environment configuration is handled by dotenv.config()



export const sendEmail = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST, 
      port: Number(process.env.MAIL_PORT), 
      secure: false, 
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, 
      },
      tls: {
        rejectUnauthorized: false, 
      },
    });

    
    await transporter.verify();
    console.log("[MAIL] SMTP connection verified");

    await transporter.sendMail({
      from: `"Intervyo" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("📧 Email sent successfully to:", to);
  } catch (error) {
    console.error("❌ Send failed:", error.message);
    throw error;
  }
};
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendEmail = async ({ to, subject, html }) => {
//   const data = await resend.emails.send({
//     from: process.env.MAIL_FROM,
//     to,
//     subject,
//     html,
//   });

//   console.log("[RESEND] Email sent:", data.id);
// };
