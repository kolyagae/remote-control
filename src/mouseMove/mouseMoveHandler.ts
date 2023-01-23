import { Duplex } from 'stream';
import * as mouse from './mouseMove';

export const mouseMoveHandler = async (data: string, duplex: Duplex) => {
  const [command, ...args] = data.split(' ');
  const distance = parseInt(args[0]);

  switch (command) {
    case 'mouse_right':
      mouse.moveRight(distance, duplex);
      break;
    case 'mouse_left':
      mouse.moveLeft(distance, duplex);
      break;
    case 'mouse_up':
      mouse.moveUp(distance, duplex);
      break;
    case 'mouse_down':
      mouse.moveDown(distance, duplex);
      break;
    case 'mouse_position':
      mouse.getCursorPosition(duplex);
      break;
  }
};
