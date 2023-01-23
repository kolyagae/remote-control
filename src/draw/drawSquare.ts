import { Button, mouse, right, down, left, up } from '@nut-tree/nut-js';
import { TDrawFunc } from '../types';

export const drawSquare: TDrawFunc = async (data, duplex) => {
  const [, distance1] = data.split(' ');
  const width = parseInt(distance1);

  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(width));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(down(width));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(width));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(up(width));
  await mouse.releaseButton(Button.LEFT);

  console.log(`draw_square ${width}px`);
  duplex.write(`draw_square ${width}px`);
};
