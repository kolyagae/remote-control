import { mouse, right, left, up, down } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const mouseMoveHandler = async (data: string, duplex: Duplex) => {
  const [command, ...args] = data.split(' ');
  const distance = parseInt(args[0]);
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
  }
};
