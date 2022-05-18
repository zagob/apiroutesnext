// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   params: string | string[];
// };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  res.status(200).json({ params: id });
}
