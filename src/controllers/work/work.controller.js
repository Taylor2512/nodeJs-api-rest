const WorksService = require('../../services/work.service');
const WorkRequest = require('../../models/request/WorkRequest');

/**
 * @swagger
 * tags:
 *   name: Trabajos
 *   description: Endpoints para operaciones básicas de trabajos, incluyendo la experiencia laboral de un CV
 */

/**
 * @swagger
 * /api/v1/work:
 *   get:
 *     summary: Obtiene todos los trabajos.
 *     description: Retorna todos los trabajos disponibles, incluyendo la experiencia laboral de un CV.
 *     tags: [Trabajos]
 *     responses:
 *       '200':
 *         description: Respuesta exitosa. Retorna un arreglo de trabajos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WorkDto'
 *       '404':
 *         description: No se encontraron trabajos.
 */
const getAllWork = async (req, res) => {
  try {
    const work = await WorksService.getAllWork();
    res.json(work);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los trabajos' });
  }
};

/**
 * @swagger
 * /api/v1/work/{id}:
 *   get:
 *     summary: Obtiene un trabajo por su ID.
 *     description: Retorna un trabajo específico según su ID, incluyendo la experiencia laboral de un CV.
 *     tags: [Trabajos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del trabajo a buscar.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Respuesta exitosa. Retorna el trabajo encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WorkDto'
 *       '404':
 *         description: No se encontró el trabajo con el ID especificado.
 */
const getWorkById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    const Work = await WorksService.getWorkById(id);
    if (!Work) {
      return res.status(404).json({ error: 'Trabajo no encontrado' });
    }
    res.json(Work);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el trabajo por ID' });
  }
};

/**
 * @swagger
 * /api/v1/work:
 *   post:
 *     summary: Crea un nuevo trabajo.
 *     description: Crea un nuevo trabajo con los datos proporcionados, incluyendo la experiencia laboral de un CV.
 *     tags: [Trabajos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WorkRequest'
 *     responses:
 *       '201':
 *         description: Trabajo creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WorkDto'
 *       '400':
 *         description: Error en la solicitud. Verificar los datos enviados.
 */
const createWork = async (req, res) => {
  try {
    const createdRequest = WorkRequest.createFromRequest(req.body);
    const newWork = await WorksService.createWork(createdRequest);
    res.status(201).json(newWork);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/v1/work/{id}:
 *   put:
 *     summary: Actualiza un trabajo existente.
 *     description: Actualiza un trabajo existente con los datos proporcionados, incluyendo la experiencia laboral de un CV.
 *     tags: [Trabajos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del trabajo a actualizar.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WorkRequest'
 *     responses:
 *       '200':
 *         description: Trabajo actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/WorkDto'
 *       '400':
 *         description: Error en la solicitud. Verificar los datos enviados.
 *       '404':
 *         description: No se encontró el trabajo con el ID especificado.
 */
const updateWork = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    
    const updatedRequest = WorkRequest.createFromRequest(req.body);
    const updatedWork = await WorksService.updateWork(id, updatedRequest);
    if (!updatedWork) {
      return res.status(404).json({ error: 'Trabajo no encontrado' });
    }
    res.json(updatedWork);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el trabajo' });
  }
};

/**
 * @swagger
 * /api/v1/work/{id}:
 *   delete:
 *     summary: Elimina un trabajo existente.
 *     description: Elimina un trabajo existente según su ID, incluyendo la experiencia laboral de un CV.
 *     tags: [Trabajos]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del trabajo a eliminar.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Trabajo eliminado exitosamente.
 *       '404':
 *         description: No se encontró el trabajo con el ID especificado.
 */
const deleteWork = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    const deletedWork = await WorksService.deleteWork(id);
    if (!deletedWork) {
      return res.status(404).json({ error: 'Trabajo no encontrado' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el trabajo' });
  }
};

module.exports = {
  getAllWork,
  getWorkById,
  createWork,
  updateWork,
  deleteWork,
};
