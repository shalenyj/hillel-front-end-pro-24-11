const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', (event) => {
  console.log('WebSocket connected');
  socket.send('Hello Server!');
});

socket.addEventListener('message', (event) => {
  console.log('Message from server:', event.data);
});

socket.addEventListener('close', (event) => {
  console.log('WebSocket disconnected', event);
});


socket.addEventListener('error', (event) => {
  console.log('Error', event);
  socket.send('Hello Server!');
});