const dgram = require('dgram');

// Crea un servidor UDP
const server = dgram.createSocket('udp4');

// Escucha en el puerto 25565
const PORT = 25565;

server.on('error', (err) => {
  console.error(`Error en el servidor: ${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  // Procesa el mensaje recibido, en este caso, asumimos que es un mensaje de coordenadas geográficas
  const coordenadas = msg.toString();
  console.log(`Coordenadas recibidas desde ${rinfo.address}:${rinfo.port}: ${coordenadas}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`Servidor UDP escuchando en ${address.address}:${address.port}`);
});

// Comienza a escuchar en el puerto 25565
server.bind(PORT);
