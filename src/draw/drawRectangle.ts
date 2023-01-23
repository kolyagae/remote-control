import { Button, mouse, right, down, left, up } from '@nut-tree/nut-js';
import { TDrawFunc } from '../types';

export const drawRectangle: TDrawFunc = async (data, duplex) => {
  const [, distance1, distance2] = data.split(' ');
  const width = parseInt(distance1);
  const height = parseInt(distance2);

  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(width));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(down(height));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(width));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(up(height));
  await mouse.releaseButton(Button.LEFT);

  console.log(`draw_rectangle ${width}px ${height}px`);
  duplex.write(`draw_rectangle ${width}px ${height}px`);
};
