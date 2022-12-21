import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../lib/mongodb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    console.log("Fetching blog posts.... ");
    const client = await clientPromise;
    const db = client.db("portfolio");
    const posts = await db.collection("posts").find({}).toArray();
    console.log("posts", posts);
    res.status(200).json({ posts });
  } catch (error) {
    console.error({ error });
    res.status(404).json({ message: "Error" });
  }
}
