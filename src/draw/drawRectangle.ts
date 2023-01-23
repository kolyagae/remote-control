import { Button, mouse, right, down, left, up } from '@nut-tree/nut-js';

export const drawRectangle = async (width: number, height: number) => {
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
};
