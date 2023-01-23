import { Duplex } from 'stream';

export type TDrawFunc = {
  (data: string, duplex: Duplex): Promise<void>;
};

export type TMouseMoveFunc = {
  (distance: number, duplex: Duplex): Promise<void>;
};
