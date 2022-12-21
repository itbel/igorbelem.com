// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

type EmailFunctionResponse = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailFunctionResponse>
) {
  if (
    !process.env.AWS_SES_REGION ||
    !process.env.AWS_SES_ACCESS_KEY ||
    !process.env.AWS_SES_SECRET_KEY
  )
    return res.status(400).json({ message: "Missing environment variables!" });
  else console.log("Environment variables are set...");
  const data = JSON.parse(req.body);
  const messageContent = data.message;
  const senderEmail = data.email;
  const name = data.name;
  if (
    typeof messageContent !== "string" ||
    typeof senderEmail !== "string" ||
    typeof name !== "string"
  )
    return res
      .status(400)
      .json({ message: "Email or message type must be string!" });
  else console.log("Email and message are validated...");
  if (!messageContent || !senderEmail || !name)
    return res
      .status(400)
      .json({ message: "Email or message or name is missing!" });
  else console.log("Email and message and name are set...");

  const client = new SESClient({
    region: process.env.AWS_SES_REGION,
    credentials: {
      accessKeyId: process.env.AWS_SES_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SES_SECRET_KEY,
    },
  });

  const params = {
    Destination: {
      ToAddresses: ["igortbelem@gmail.com"],
    },
    ReplyToAddresses: [senderEmail],
    Message: {
      Body: {
        Text: {
          Data: messageContent,
        },
      },
      Subject: {
        Data: `${name} - igorbelem.com`,
      },
    },
    Source: "igortbelem@gmail.com",
  };

  const command = new SendEmailCommand(params);
  try {
    const data = await client.send(command);
    if (data.$metadata.httpStatusCode !== 200)
      return res.status(400).json({ message: "Failed to send e-mail" });
    return res.status(200).json({ message: "Successfully sent e-mail" });
  } catch (error) {
    console.error({ error });
    return res.status(400).json({ message: "Failed to send e-mail" });
  }
}
