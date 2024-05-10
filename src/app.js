require("dotenv").config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const config = require('./config');
const bodyParser = require('body-parser');
const routesApp = require('./routers/v1/router');
const connectDB = require('./data/database/db'); // Importa la función de conexión
const app = express();

// Configurar el puerto
const PORT = process.env.PORT || config.app.port;
app.set('port', PORT);

// Middleware para procesar JSON y datos del formulario
app.use(express.json({ strict: true, type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/plain' }));
app.use(bodyParser.raw({ type: 'application/octet-stream' }));
app.use(config.convertParamsToNumber);

// Rutas de la API
app.use('/api/v1', routesApp);

// Agregar la interfaz Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(config.swaggerSpec));

// Middleware de manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Exportar la aplicación configurada
module.exports = app;
