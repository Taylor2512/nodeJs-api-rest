/* app configuration  config.js*/

const swaggerJsdoc = require('swagger-jsdoc');

// Definir opciones de Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Skills',
            version: '1.0.0',
            description: 'Una API para administrar habilidades (skills)',
        },
    },
    apis: ['./src/modulos/v1/*.js'], // Rutas donde se encuentran las definiciones de rutas
};

// Crear la especificación Swagger
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Exportar la configuración de la aplicación y la especificación de Swagger
module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    swaggerSpec, // Exportar la especificación de Swagger
};