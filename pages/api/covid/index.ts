import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const xApiKey = process.env.API_GATEWAY_KEY ?? "";
  const covidURI = process.env.API_GATEWAY_COVID_URI ?? "";
  if (xApiKey === "" || covidURI === "") {
    return res.status(500).json({ error: "API Gateway Key not set" });
  }
  const response = await fetch(covidURI, {
    method: "get",
    mode: "cors",
    headers: {
      "x-api-key": xApiKey,
      "Content-Type": "application/json",
    },
  });
  const json: any = await response.json();
  return res.status(200).json({ data: json.body, headers: json.body[0] });
}
