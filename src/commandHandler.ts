import { Duplex } from 'stream';
import { drawHandler } from './draw/drawHandler';
import { mouseMoveHandler } from './navigation/mouseMoveHandler';

export const commandHandler = async (data: string, duplex: Duplex) => {
  const [commandFor] = data.split('_');

  switch (commandFor) {
    case 'mouse':
      mouseMoveHandler(data, duplex);
      break;
    case 'draw':
      drawHandler(data);
      break;
  }
};
