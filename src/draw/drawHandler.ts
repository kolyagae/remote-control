import { mouse } from '@nut-tree/nut-js';
import { drawCircle } from './drawCircle';
import { drawRectangle } from './drawRectangle';
import { drawSquare } from './drawSquare';

export const drawHandler = async (data: string) => {
  const [command, ...args] = data.split(' ');
  const distance = parseInt(args[0]);
  const distance2 = parseInt(args[1]);
  const position = await mouse.getPosition();

  switch (command) {
    case 'draw_circle':
      drawCircle(distance, position);
      break;
    case 'draw_rectangle':
      drawRectangle(distance, distance2);
      break;
    case 'draw_square':
      drawSquare(distance);
      break;
  }
};
