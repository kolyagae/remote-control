import { drawCircle } from './drawCircle';
import { drawRectangle } from './drawRectangle';
import { drawSquare } from './drawSquare';

export const drawHandler = async (data: string) => {
  const [command, ...args] = data.split(' ');
  const distance = parseInt(args[0]);
  const height = parseInt(args[1]);

  switch (command) {
    case 'draw_circle':
      drawCircle(distance);
      break;
    case 'draw_rectangle':
      drawRectangle(distance, height);
      break;
    case 'draw_square':
      drawSquare(distance);
      break;
  }
};
