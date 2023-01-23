import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { Duplex } from 'stream';
import { TMouseMoveFunc } from '../types';

export const moveRight: TMouseMoveFunc = async (distance, duplex) => {
  await mouse.move(right(distance));
  console.log(`mouse_right ${distance}px`);
  duplex.write(`mouse_right_${distance}px`);
};

export const moveLeft: TMouseMoveFunc = async (distance, duplex) => {
  await mouse.move(left(distance));
  console.log(`mouse_left ${distance}px`);
  duplex.write(`mouse_left_${distance}px`);
};

export const moveUp: TMouseMoveFunc = async (distance, duplex) => {
  await mouse.move(up(distance));
  console.log(`mouse_up ${distance}px`);
  duplex.write(`mouse_up_${distance}px`);
};

export const moveDown: TMouseMoveFunc = async (distance, duplex) => {
  await mouse.move(down(distance));
  console.log(`mouse_down ${distance}px`);
  duplex.write(`mouse_down_${distance}px`);
};

export const getCursorPosition = async (duplex: Duplex) => {
  const { x, y } = await mouse.getPosition();
  console.log(`mouse_position ${x}px,${y}px`);
  duplex.write(`mouse_position ${x}px,${y}px`);
};
