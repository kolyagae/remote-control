import { screen, mouse, Region } from '@nut-tree/nut-js';
import Jimp from 'jimp';
import { Duplex } from 'stream';

export const makePrintScreen = async (duplex: Duplex) => {
  try {
    const cursorPosition = await mouse.getPosition();

    await screen.highlight(new Region(cursorPosition.x - 100, cursorPosition.y - 100, 200, 200));
    const image = await screen.grabRegion(new Region(cursorPosition.x - 100, cursorPosition.y - 100, 200, 200));
    const imageRGB = await image.toRGB();
    const imageRGBbuffer = imageRGB.data;
    const newImage = new Jimp({ data: imageRGBbuffer, width: imageRGB.width, height: imageRGB.height });
    const newImageBuffer = await newImage.getBufferAsync(Jimp.MIME_PNG);
    const newImageBase64Buffer = newImageBuffer.toString('base64');

    duplex.write(`prnt_scrn ${newImageBase64Buffer}`);
    console.log(`prnt_scrn`);
  } catch (err) {
    err instanceof Error ? console.error(err.message) : null;
  }
};
