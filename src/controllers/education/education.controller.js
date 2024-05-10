const educationsService = require('../../services/education.service');
const EducationRequest = require('../../models/request/educationRequest');

/**
 * @swagger
 * tags:
 *   name: education
 *   description: Endpoints para operaciones básicas de educación en un CV
 */

/**
 * @swagger
 * /api/v1/education:
 *   get:
 *     summary: Obtiene todas las educaciones de un CV.
 *     description: Retorna todas las educaciones disponibles en un CV.
 *     tags: [education]
 *     responses:
 *       '200':
 *         description: Respuesta exitosa. Retorna toda la información básica disponible de las educaciones en un CV.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EducationDto'
 *       '404':
 *         description: No se encontraron educaciones en el CV.
 */
const getAllEducations = async (req, res) => {
  try {
    const education = await educationsService.getAllEducations();
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/v1/education/{id}:
 *   get:
 *     summary: Obtiene una educación de un CV por su ID.
 *     description: Retorna una educación específica en un CV según su ID.
 *     tags: [education]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la educación a buscar en el CV.
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       '200':
 *         description: Respuesta exitosa. Retorna la educación encontrada en el CV.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EducationDto'
 *       '404':
 *         description: No se encontró la educación con el ID especificado en el CV.
 */
const getEducationById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    const education = await educationsService.getEducationById(id);
    if (!education) {
      return res.status(404).json({ error: 'Education not found' });
    }
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/v1/education:
 *   post:
 *     summary: Crea una nueva educación en un CV.
 *     description: Crea una nueva educación en un CV con los datos proporcionados.
 *     tags: [education]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EducationRequest'
 *     responses:
 *       '201':
 *         description: Educación creada exitosamente en el CV.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EducationDto'
 *       '400':
 *         description: Error en los datos proporcionados.
 */
const createEducation = async (req, res) => {
  try {
    const createdEducation = EducationRequest.createFromRequest(req.body);
    const education = await educationsService.createEducation(createdEducation);
    res.status(201).json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/v1/education/{id}:
 *   put:
 *     summary: Actualiza una educación existente en un CV.
 *     description: Actualiza una educación existente en un CV con los datos proporcionados.
 *     tags: [education]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la educación a actualizar en el CV.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EducationRequest'
 *     responses:
 *       '200':
 *         description: Educación actualizada exitosamente en el CV.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EducationDto'
 *       '400':
 *         description: Error en los datos proporcionados.
 *       '404':
 *         description: No se encontró la educación con el ID especificado en el CV.
 */
const updateEducation = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    const updateEducationRequest = EducationRequest.createFromRequest(req.body);
    const education = await educationsService.updateEducation(id, updateEducationRequest);
    if (!education) {
      return res.status(404).json({ error: 'Education not found' });
    }
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/v1/education/{id}:
 *   delete:
 *     summary: Elimina una educación existente en un CV.
 *     description: Elimina una educación existente en un CV según su ID.
 *     tags: [education]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la educación a eliminar en el CV.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Educación eliminada exitosamente en el CV.
 *       '404':
 *         description: No se encontró la educación con el ID especificado en el CV.
 */
const deleteEducation = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    const education = await educationsService.deleteEducation(id);
    if (!education) {
      return res.status(404).json({ error: 'Education not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEducations,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
};
