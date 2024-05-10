const express = require('express');
const BasicController = require('../../controllers/basics/basics.controller');
const EducationController = require('../../controllers/education/education.controller');
const WorkController = require('../../controllers/work/work.controller');
const SkillController = require('../../controllers/skills/skills.controller');

const router = express.Router();

// Rutas para la versión 1 (v1) de las características
router.get('/basics', BasicController.getAllBasics);
router.get('/basics/:id', BasicController.getBasicById);
router.post('/basics', BasicController.createBasic);
router.put('/basics/:id', BasicController.updateBasic);
router.delete('/basics/:id', BasicController.deleteBasic);

router.get('/education', EducationController.getAllEducations);
router.get('/education/:id', EducationController.getEducationById);
router.post('/education', EducationController.createEducation);
router.put('/education/:id', EducationController.updateEducation);
router.delete('/education/:id', EducationController.deleteEducation);

router.get('/work', WorkController.getAllWork);
router.get('/work/:id', WorkController.getWorkById);
router.post('/work', WorkController.createWork);
router.put('/work/:id', WorkController.updateWork);
router.delete('/work/:id', WorkController.deleteWork);

router.get('/skills', SkillController.getAllSkills);
router.get('/skills/:id', SkillController.getSkillById);
router.post('/skills', SkillController.createSkill);
router.put('/skills/:id', SkillController.updateSkill);
router.delete('/skills/:id', SkillController.deleteSkill);

module.exports = router;

