const skillsService = require('../../services/skills.service');
const SkillRequest = require('../../models/request/SkillRequest');

/**
 * @swagger
 * /api/v1/Skills:
 *   get:
 *     summary: Obtener todas las habilidades básicas de un CV.
 *     description: Retorna todas las habilidades básicas de un CV disponibles.
 *     tags: [Skills]
 *     responses:
 *       '200':
 *         description: Respuesta exitosa. Retorna un arreglo de habilidades de un CV.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SkillDto'
 *       '404':
 *         description: No se encontraron habilidades básicas de un CV.
 */
const getAllSkills = (req, res) => {
  try {
    const skills = skillsService.getAllSkills();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las habilidades básicas de un CV' });
  }
};

/**
 * @swagger
 * /api/v1/Skills/{id}:
 *   get:
 *     summary: Obtener una habilidad de un CV por su ID.
 *     description: Retorna una habilidad específica de un CV según su ID.
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la habilidad de un CV a buscar.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Respuesta exitosa. Retorna la habilidad de un CV encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SkillDto'
 *       '404':
 *         description: No se encontró la habilidad de un CV con el ID especificado.
 */
const getSkillById = async (req, res) => {
  try {
    const id = req.params.id;
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    const skill = await skillsService.getSkillById(id);
    if (!skill) {
      return res.status(404).json({ error: 'Habilidad de un CV no encontrada' });
    }
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la habilidad de un CV por su ID' });
  }
};

/**
 * @swagger
 * /api/v1/Skills:
 *   post:
 *     summary: Crear una nueva habilidad de un CV.
 *     description: Crea una nueva habilidad de un CV con los datos proporcionados.
 *     tags: [Skills]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SkillRequest'
 *     responses:
 *       '201':
 *         description: Habilidad de un CV creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SkillDto'
 *       '400':
 *         description: Error en los datos proporcionados.
 */
const createSkill = async (req, res) => {
  try {
    const createdRequest = SkillRequest.createFromRequest(req.body);
    const skill = await skillsService.createSkill(createdRequest);
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message  });
  }
};

/**
 * @swagger
 * /api/v1/Skills/{id}:
 *   put:
 *     summary: Actualizar una habilidad de un CV existente.
 *     description: Actualiza una habilidad de un CV existente con los datos proporcionados.
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la habilidad de un CV a actualizar.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SkillRequest'
 *     responses:
 *       '200':
 *         description: Habilidad de un CV actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SkillDto'
 *       '400':
 *         description: Error en los datos proporcionados.
 *       '404':
 *         description: No se encontró la habilidad de un CV con el ID especificado.
 */
const updateSkill = async (req, res) => {
  try {
    const id = Number(req.params.id);
 
    const updateRequest = SkillRequest.createFromRequest(req.body);
    const skill = await skillsService.updateSkill(id, updateRequest);
    if (!skill) {
      return res.status(404).json({ error: 'Habilidad de un CV no encontrada' });
    }
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/v1/Skills/{id}:
 *   delete:
 *     summary: Eliminar una habilidad de un CV existente.
 *     description: Elimina una habilidad de un CV existente según su ID.
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la habilidad de un CV a eliminar.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Habilidad de un CV eliminada exitosamente.
 *       '404':
 *         description: No se encontró la habilidad de un CV con el ID especificado.
 */
const deleteSkill = async (req, res) => {
  try {
    const id = Number(req.params.id);
 
    const skill = await skillsService.deleteSkill(id);
    if (!skill) {
      return res.status(404).json({ error: 'Habilidad de un CV no encontrada' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar una habilidad de un CV existente' });
  }
};

module.exports = {
  getAllSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
};
