// src/modulos/v1/skills.js

const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/v1/skills:
 *   get:
 *     summary: Obtiene todas las habilidades.
 *     description: Retorna la lista de todas las habilidades disponibles.
 *     responses:
 *       200:
 *         description: Lista de habilidades.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   nombre:
 *                     type: string
 */
router.get('/', (req, res) => {
    // Simulando la obtención de habilidades desde una base de datos o servicio
    const skills = [
        { id: 1, nombre: 'Programación' },
        { id: 2, nombre: 'Diseño gráfico' },
        { id: 3, nombre: 'Gestión de proyectos' }
    ];
    res.json(skills);
});

/**
 * @swagger
 * /api/v1/skills/{id}:
 *   get:
 *     summary: Obtiene una habilidad por su ID.
 *     description: Retorna una habilidad específica según su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la habilidad a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Datos de la habilidad encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nombre:
 *                   type: string
 */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    // Aquí implementa la lógica para obtener la habilidad por su ID (simulado)
    const skill = { id: parseInt(id), nombre: 'Programación' };
    res.json(skill);
});

/**
 * @swagger
 * /api/v1/skills:
 *   post:
 *     summary: Crea una nueva habilidad.
 *     description: Crea una nueva habilidad con el nombre proporcionado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Habilidad creada exitosamente.
 */
router.post('/', (req, res) => {
    const { nombre } = req.body;
    // Aquí implementa la lógica para crear una nueva habilidad (simulado)
    res.status(201).send(`Habilidad '${nombre}' creada`);
});

// Exporta el router para ser usado por la aplicación principal
module.exports = router;
