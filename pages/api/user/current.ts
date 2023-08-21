import { NextApiRequest, NextApiResponse } from 'next';

export default async function CurrentUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const sid = req.headers.authorization;

    if (!sid) {
      return res.status(401).json({ error: 'No SID Provided in req' });
    }
  } catch (err) {}
}
