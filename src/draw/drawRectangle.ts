import { Button, mouse, right, down, left, up } from '@nut-tree/nut-js';

export const drawRectangle = async (distance: number, distance2: number) => {
  await mouse.pressButton(Button.LEFT);
  await mouse.move(right(distance));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(down(distance2));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(left(distance));
  await mouse.releaseButton(Button.LEFT);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(up(distance2));
  await mouse.releaseButton(Button.LEFT);
};
