import { down, left, mouse, right, up } from "@nut-tree/nut-js";

export const handler = async (data: string) => {
  const [command, ...args] = data.split(' ');
    switch (command) {
      case 'mouse_right':
        await mouse.move(right(+args[0]));
        break;
      case 'mouse_left':
        await mouse.move(left(+args[0]));
        break;
      case 'mouse_up':
        await mouse.move(up(+args[0]));
        break;
      case 'mouse_down':
        await mouse.move(down(+args[0]));
        break;
    }
}
