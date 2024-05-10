/* index.js */
const http = require('http');
const app = require('./app');
const connectDB = require('./data/database/db'); // Importa la función de conexión

const port = app.get('port');
const server = http.createServer(app);

// Conectar a la base de datos y luego iniciar el servidor
connectDB().then(() => {
  server.listen(port, () => {
    console.log('[app] Listening on port:', port);
  });
}).catch(err => {
  console.error('Failed to connect to the database:', err);
});
