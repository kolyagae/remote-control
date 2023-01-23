import { httpServer } from './src/http_server/index';
import { createWebSocketStream, WebSocketServer } from 'ws';
import { commandHandler } from './src/commandHandler';
import * as dotenv from 'dotenv';
dotenv.config();

const HTTP_PORT = process.env.HTTP_PORT ?? 8181;
const WEBSOCKET_PORT = process.env.WEBSOCKET_PORT ?? 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(+HTTP_PORT);

const wss = new WebSocketServer({ port: +WEBSOCKET_PORT });

wss.on('connection', (ws) => {
  console.log(`Start websocket server on the ${WEBSOCKET_PORT} port!`);
  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', async (data: string) => {
    commandHandler(data, duplex);
  });
});

process.on('SIGINT', () => {
  console.log(`\nWebsocket and static http server stopped!`);
  wss.close();
  httpServer.close();
});
