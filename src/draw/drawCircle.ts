import { Button, mouse, straightTo, Point } from '@nut-tree/nut-js';
import { TDrawFunc } from '../types';

export const drawCircle: TDrawFunc = async (data, duplex) => {
  const position = await mouse.getPosition();
  const [, distance] = data.split(' ');
  const radius = parseInt(distance);
  await mouse.pressButton(Button.LEFT);

  for (let i = 0; i <= 360; i++) {
    const x = Math.sin((2 * Math.PI * i) / 360) * radius + position.y;
    const y = Math.cos((2 * Math.PI * i) / 360) * radius + (position.x - radius);
    await mouse.move(straightTo(new Point(y, x)));
  }

  await mouse.releaseButton(Button.LEFT);
  duplex.write(`draw_circle ${radius}px`);
  console.log(`draw_circle ${radius}px`);
};
