import path from "path";
import fs from "fs";
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse<Buffer>) => {
  const { issuerCode, codeName } = req.query;
  let filePath = path.join(
    __dirname, 
    `../../../../../../public/thumbnails/${issuerCode}/${codeName}/${codeName}.webp`
  );
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, '../../../../../../public/blank_card.webp');
  }
  const imageBuffer = fs.readFileSync(filePath);
  res.setHeader('Content-Type', 'image/webp');
  // res.setHeader('Content-disposition', 'attachment; filename=filename.ext');
  res.send(imageBuffer);
}

export default handler;
