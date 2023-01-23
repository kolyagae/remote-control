import { Duplex } from 'stream';
import { drawCircle } from './drawCircle';
import { drawRectangle } from './drawRectangle';
import { drawSquare } from './drawSquare';

export const drawHandler = async (data: string, duplex: Duplex) => {
  const [command] = data.split(' ');

  switch (command) {
    case 'draw_circle':
      drawCircle(data, duplex);
      break;
    case 'draw_rectangle':
      drawRectangle(data, duplex);
      break;
    case 'draw_square':
      drawSquare(data, duplex);
      break;
  }
};
