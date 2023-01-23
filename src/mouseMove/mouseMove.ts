import { down, left, mouse, right, up } from '@nut-tree/nut-js';
import { Duplex } from 'stream';

export const moveRight = async (distance: number) => {
  await mouse.move(right(distance));
  console.log(`mouse_right ${distance}px`);
};

export const moveLeft = async (distance: number) => {
  await mouse.move(left(distance));
  console.log(`mouse_left ${distance}px`);
};

export const moveUp = async (distance: number) => {
  await mouse.move(up(distance));
  console.log(`mouse_up ${distance}px`);
};

export const moveDown = async (distance: number) => {
  await mouse.move(down(distance));
  console.log(`mouse_down ${distance}px`);
};

export const getCursorPosition = async (duplex: Duplex) => {
  const { x, y } = await mouse.getPosition();
  duplex.write(`mouse_position ${x}px,${y}px`);
  console.log(`mouse_position ${x}px,${y}px`);
};
