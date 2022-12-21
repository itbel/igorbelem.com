import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../lib/mongodb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const post = await db.collection("posts").findOne({
      _id: req.query.id,
    });

    res.status(200).json({ post });
  } catch (error) {
    console.error({ error });
    res.status(404).json({ message: "Error" });
  }
}
