import { NextApiRequest, NextApiResponse } from "next";
import { FormData } from "../../components/ContactForm";
import nodemailer from "nodemailer";

const email = process.env.EMAIL!;
const password = process.env.EMAIL_PASS!;

const generateString = (data: FormData) => {
  return Object.entries(data).reduce(
    (str, [key, val]) => (str += `${key}: \n${val} \n \n`),
    ""
  );
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      throw new Error("Only post requests allowed");
    }

    const data = req.body as FormData;

    if (!data.email || !data.message || !data.message) {
      throw new Error("Missing data");
    }
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: email,
      to: email,
      subject: `Message from ${data.name}`,
      text: generateString(data),
      html: `<h3>Sender: ${data.name}</h3><h3>Email: ${data.email}</h3><p>${data.message}</p>`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    if (err instanceof String) {
      res.status(400).json({ message: err });
    }
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    }

    res.status(400).json({ message: "Bad request" });
  }
}
