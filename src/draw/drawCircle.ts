import { Button, mouse, straightTo, Point } from '@nut-tree/nut-js';

export const drawCircle = async (radius: number) => {
  await mouse.pressButton(Button.LEFT);
  const position = await mouse.getPosition();

  for (let i = 0; i <= 360; i++) {
    const x = Math.sin((2 * Math.PI * i) / 360) * radius + position.y;
    const y = Math.cos((2 * Math.PI * i) / 360) * radius + (position.x - radius);
    await mouse.move(straightTo(new Point(y, x)));
  }

  await mouse.releaseButton(Button.LEFT);
  console.log(`draw_circle ${radius}px`);
};
