const fs = require('fs');
const path = require('path');
const swaggerJsdoc = require('swagger-jsdoc');

// Directorio donde se encuentran los modelos DTO y Request
const dtoDir = path.join(__dirname, './models/dto');
const requestDir = path.join(__dirname, './models/request');

// Definir opciones de Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Curriculum Vitae',
            version: '1.0.0',
            description: 'API para Acceso al Curriculum Vitae',
        },
        components: {
            schemas: {}, // Inicializar un objeto vacío para almacenar los schemas
        },
        tags: [], // Inicializar un array vacío para almacenar los tags
        paths: {}, // Inicializar un objeto vacío para las rutas
    },
    apis: [path.join(__dirname, './controllers/**/*.controller.js')],
};

// Cargar los modelos DTO dinámicamente y generar las definiciones de schemas
fs.readdirSync(dtoDir).forEach((file) => {
    const modelPath = path.join(dtoDir, file);
    const modelName = path.parse(file).name;

    // Importar el modelo DTO
    const ModelDto = require(modelPath);

    // Definir el schema del modelo DTO para response
    swaggerOptions.definition.components.schemas[modelName] = {
        $ref: `#/components/schemas/${modelName}`, // Referencia al esquema del modelo DTO
    };

    // Agregar las propiedades del modelo DTO al schema de response
    swaggerOptions.definition.components.schemas[modelName].properties = ModelDto.schema();
});

// Cargar los modelos de request dinámicamente y generar las definiciones de schemas
fs.readdirSync(requestDir).forEach((file) => {
    const modelPath = path.join(requestDir, file);
    const modelName = path.parse(file).name;

    // Importar el modelo de request
    const ModelRequest = require(modelPath);

    // Definir el schema del modelo de request
    swaggerOptions.definition.components.schemas[modelName] = {
        $ref: `#/components/schemas/${modelName}`, // Referencia al esquema del modelo de request
    };

    // Agregar las propiedades del modelo de request al schema
    swaggerOptions.definition.components.schemas[modelName].properties = ModelRequest.schema();
});

// Crear la especificación Swagger
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Exportar la configuración de la aplicación y la especificación de Swagger
const convertParamsToNumber = (req, res, next) => {
    const paramsToConvert = ['id'];
    for (const param of paramsToConvert) {
        if (req.params[param] !== undefined && !isNaN(req.params[param])) {
            req.params[param] = Number(req.params[param]);
        }
    }
    next();
};

module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    convertParamsToNumber,
    swaggerSpec,
};
