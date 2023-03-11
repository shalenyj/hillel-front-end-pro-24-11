const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('A client connected');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    
    ws.send('Hello friend')

    // let counter =  0
    // setInterval(() => {
    //   ws.send(JSON.stringify({ counter: ++counter}))
    // }, 2000)

  });

  ws.on('close', () => {
    console.log('A client disconnected');
  });
});