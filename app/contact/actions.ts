"use server";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function sendEmail(prevState: any, formData: FormData) {
  const message = formData.get("message")?.toString()
  const email = formData.get("email")?.toString()
  const name = formData.get("name")?.toString()
  if (
    !process.env.AWS_SES_REGION ||
    !process.env.AWS_SES_ACCESS_KEY ||
    !process.env.AWS_SES_SECRET_KEY
  )
    return { message: "Environment variables are missing!" }
  if (
    typeof message !== "string" ||
    typeof email !== "string" ||
    typeof name !== "string"
  ) {
    return { message: "Email or message type must be string!" }
  }
  const emailRegex = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
    if (!emailRegex.test(email))
        return { message: "Email is not valid!" }

  if (!message || !email || !name)
    return{ message: "Email or message or name is missing!" }

  const client = new SESClient({
    region: process.env.AWS_SES_REGION,

    credentials: {
      accessKeyId: process.env.AWS_SES_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SES_SECRET_KEY,
    },
  });

  const command = new SendEmailCommand({
    Destination: {
      ToAddresses: ["igortbelem@gmail.com"],
    },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Data: message,
        },
      },
      Subject: {
        Data: `${name} - igorbelem.com`,
      },
    },
    Source: "igortbelem@gmail.com",
  });
  try {
    const data = await client.send(command);
    if (data.$metadata.httpStatusCode !== 200)
      return { message: "Failed to send e-mail" }
    return redirect('/contact/success')
  } catch (error) {
    console.error({ error });
    return { message: "Failed to send e-mail" }
  }
}
