import { VercelRequest, VercelResponse } from '@vercel/node';
import path from "path";
import fs from "fs";

export default (req: VercelRequest, res: VercelResponse) => {
  const { codeName, issuerCode } = req.query;

  let filePath = path.join(
    __dirname,
    `../../public/thumbnails/${issuerCode}/${codeName}/${codeName}.webp`
  );

  if (!fs.existsSync(filePath)) {
    // If file doesn't exist (no card thumbnail for the given [codeName]) => Replace it with the alt image (blank_card.webp)
    filePath = path.join(__dirname, '../../public/blank_card.webp');
  }

  const readStream = fs.createReadStream(filePath);

  readStream.on("open", function () {
    res.writeHead(200, {
      "Content-Type": "image/webp",
      "Content-disposition": "inline; filename=" + codeName
    });

    readStream.pipe(res);
  });

  readStream.on("error", (err) => {
    res.status(404);
    res.send("error");
  });
};