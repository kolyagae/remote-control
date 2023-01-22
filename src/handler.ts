import { Button, down, left, mouse, Point, right, straightTo, up } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const handler = async (data: string, duplex: Duplex) => {
  const [command, ...args] = data.split(' ');
  const distance = parseInt(args[0]);
  const distance2 = parseInt(args[1]);
  const position = await mouse.getPosition();

  switch (command) {
    case 'mouse_right':
      await mouse.move(right(distance));
      break;
    case 'mouse_left':
      await mouse.move(left(distance));
      break;
    case 'mouse_up':
      await mouse.move(up(distance));
      break;
    case 'mouse_down':
      await mouse.move(down(distance));
      break;
    case 'mouse_position':
      duplex.write(`mouse_position=${position.x}px,${position.y}px`);
      break;
    case 'draw_circle':
      await mouse.pressButton(Button.LEFT);

      for (let i = 0; i <= 360; i++) {
        const x = Math.sin((2 * Math.PI * i) / 360) * distance + position.y;
        const y = Math.cos((2 * Math.PI * i) / 360) * distance + (position.x - distance);
        await mouse.move(straightTo(new Point(y, x)));
      }

      await mouse.releaseButton(Button.LEFT);
      break;
    case 'draw_rectangle':
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
      break;
    case 'draw_square':
      await mouse.pressButton(Button.LEFT);
      await mouse.move(right(distance));
      await mouse.releaseButton(Button.LEFT);
      await mouse.pressButton(Button.LEFT);
      await mouse.move(down(distance));
      await mouse.releaseButton(Button.LEFT);
      await mouse.pressButton(Button.LEFT);
      await mouse.move(left(distance));
      await mouse.releaseButton(Button.LEFT);
      await mouse.pressButton(Button.LEFT);
      await mouse.move(up(distance));
      await mouse.releaseButton(Button.LEFT);
      break;
  }
};
