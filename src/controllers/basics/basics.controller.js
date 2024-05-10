const BasicsService = require('../../services/basics.service');
const BasicRequest = require('../../models/request/BasicRequest');
const BasicDto = require('../../models/dto/BasicDto');

/**
 * @swagger
 * tags:
 *   name: Basics
 *   description: Endpoints for basic information operations of a person
 */
 
/**
 * @swagger
 * /api/v1/Basics:
 *   get:
 *     summary: Get all basic information of a person.
 *     description: Obtener todos los detalles básicos del CV.
 *     tags: [Basics]
 *     responses:
 *       '200':
 *         description: Successful response. Obtener todos los detalles básicos del CV.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BasicDto'
 *       '400':
 *         description: Error in the request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

const getAllBasics = async (req, res) => {
  try {
    const Basics = await BasicsService.getAllbasics();
    res.json(Basics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/v1/Basics/{id}:
 *   get:
 *     summary: Get basic information of a person by ID.
 *     description: Obtener detalles básicos por ID. Se trata de un controlador para obtener la información básica del CV.
 *     tags: [Basics]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the person whose basic information is to be retrieved.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response. Returns the basic information of the found person.
 *       '404':
 *         description: Basic information of the person with the specified ID not found.
 */
const getBasicById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    const Basic = await BasicsService.getbasicById(id);
    if (!Basic) {
      return res.status(404).json({ error: 'Basic information of the person not found' });
    }
    res.json(Basic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/v1/Basics:
 *   post:
 *     summary: Create new basic information of a person.
 *     description: Create new basic information of a person with the provided information.
 *     tags: [Basics]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BasicRequest'
 *     responses:
 *       '201':
 *         description: Basic information of the person created successfully.
 *       '400':
 *         description: Error in the request.
 */
const createBasic = async (req, res) => {
  try {
    const newBasic = BasicRequest.createFromRequest(req.body);
    const createdBasic = await BasicsService.createBasic(newBasic);
    res.status(201).json(createdBasic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/v1/Basics/{id}:
 *   put:
 *     summary: Update existing basic information of a person.
 *     description: Update existing basic information of a person with the provided information.
 *     tags: [Basics]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the person whose basic information is to be updated.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BasicRequest'
 *     responses:
 *       '200':
 *         description: Basic information of the person updated successfully.
 *       '400':
 *         description: Error in the request.
 *       '404':
 *         description: Basic information of the person with the specified ID not found.
 */
const updateBasic = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }

    const updateRequest = BasicRequest.createFromRequest(req.body);

    const result = await BasicsService.updateBasic(id, updateRequest);
    if (!result) {
      return res.status(404).json({ error: 'Basic information of the person not found' });
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * @swagger
 * /api/v1/Basics/{id}:
 *   delete:
 *     summary: Delete existing basic information of a person.
 *     description: Delete existing basic information of a person based on their ID.
 *     tags: [Basics]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the person whose basic information is to be deleted.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Basic information of the person deleted successfully.
 *       '404':
 *         description: Basic information of the person with the specified ID not found.
 */
const deleteBasic = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    const result = await BasicsService.deleteBasic(id);
    if (!result) {
      return res.status(404).json({ error: 'Basic information of the person not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBasics,
  getBasicById,
  createBasic,
  updateBasic,
  deleteBasic,
};
