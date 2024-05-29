"use server";

import { type ReactElement } from "react";
import { Resend } from "resend";
import { RequestResumeEmail } from "../../emails/request-resume-email";
import { env } from "~/env";

const resend = new Resend(env.RESEND_API_KEY);

interface SendEmailProps {
  name: string;
  email: string;
}

export async function sendEmail({ name, email }: SendEmailProps) {
  if (!name || !email) {
    throw new Error("Name and email are required.");
  }

  const { data, error } = await resend.emails.send({
    from: "Milind <hi@milindmishra.com>",
    to: [email],
    subject: "Milind's Resume 📄",
    react: RequestResumeEmail({ name }) as ReactElement,
  });

  if (error) {
    console.error(error);
    return error;
  }

  return data;
}
