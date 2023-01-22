import { httpServer } from './src/http_server/index';
import { createWebSocketStream, WebSocketServer } from 'ws';
import { commandHandler } from './src/commandHandler';

const HTTP_PORT = 8181;
const WEBSOCKET_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WEBSOCKET_PORT });

wss.on('connection', (ws) => {
  console.log(`Websocket server started on the ${WEBSOCKET_PORT} port!`);
  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', async (data: string) => {
    commandHandler(data, duplex);
  });
});
