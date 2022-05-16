import path from "path";
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse<Buffer>) => {
  const { issuerCode, codeName } = req.query;
  console.log(__dirname)
  let filePath = path.join(
    __dirname, 
    `../../../../../../public/thumbnails/${issuerCode}/${codeName}/info.json`
  );
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, '../../../../../../public/blank_card.json');
  }
  const jsonBuffer = fs.readFileSync(filePath);
  res.setHeader('Content-Type', 'application/json');
  res.send(jsonBuffer);
}

export default handler;