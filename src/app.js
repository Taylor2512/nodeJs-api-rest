// src/app.js
const express = require('express');
 
const swaggerUi = require('swagger-ui-express');
const  config= require('./config'); // Importar la configuración de la aplicación y la especificación de Swagger
const skillsRouter = require('./modulos/v1/skills');

const app = express();


// Configurar el puerto
app.set('port', config.app.port);
// Agregar la interfaz Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(config.swaggerSpec));

// Middleware para procesar JSON
app.use(express.json());

// Agregar las rutas de skills al middleware principal de Express
app.use('/api/v1/skills', skillsRouter);

// Exportar la aplicación configurada
module.exports = app;
