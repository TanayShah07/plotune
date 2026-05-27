import dotenv from "dotenv";
dotenv.config();

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOTP = async (email, otp) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Plotune OTP",
    html: `<p>Your OTP is <b>${otp}</b></p>`,
  });

  console.log("OTP sent via Resend ✅");
};