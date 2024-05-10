const educationsRepository = require('./../data/repositorys/education.repository');

exports.createEducation = async (education) => {
  return await educationsRepository.createEducation(education);
};

exports.getEducationById = async (id) => {
  return await educationsRepository.getEducationById(id);
};

exports.getAllEducations = async () => {
  return await educationsRepository.getAllEducations();
};

exports.updateEducation = async (id, education) => {
  return await educationsRepository.updateEducation(id, education);
};

exports.deleteEducation = async (id) => {
  return await educationsRepository.deleteEducation(id);
};
