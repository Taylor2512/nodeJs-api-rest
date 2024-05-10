const skillsRepository = require('./../data/repositorys/skills.repository');

exports.getAllSkills = async () => {
  return await skillsRepository.getAllSkills();
};

exports.getSkillById = async (id) => {
  return await skillsRepository.getSkillById(id);
};

exports.createSkill = async (skill) => {
  return await skillsRepository.createSkill(skill);
};

exports.updateSkill = async (id, updatedSkill) => {
  return await skillsRepository.updateSkill(id, updatedSkill);
};

exports.deleteSkill = async (id) => {
  return await skillsRepository.deleteSkill(id);
};
