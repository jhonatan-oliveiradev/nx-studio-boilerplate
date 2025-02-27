import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { firstName, lastName, email, message, selectedServices } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Definir no .env
      pass: process.env.EMAIL_PASS, // Definir no .env
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "seu-email@exemplo.com",
      subject: "Novo contato via formulário",
      text: `
        Nome: ${firstName} ${lastName}
        Email: ${email}
        Mensagem: ${message}
        Serviços Selecionados: ${selectedServices.join(", ")}
      `,
    });

    res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Erro ao enviar o email" });
  }
}
