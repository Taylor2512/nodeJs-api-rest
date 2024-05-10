const worksRepository = require('./../data/repositorys/work.repository');

exports.getAllWork = async () => {
  return await worksRepository.getAllWork();
};

exports.getWorkById = async (id) => {
  return await worksRepository.getWorkById(id);
};

exports.createWork = async (work) => {
  return await worksRepository.createWork(work);
};

exports.updateWork = async (id, updatedWork) => {
  return await worksRepository.updateWork(id, updatedWork);
};

exports.deleteWork = async (id) => {
  return await worksRepository.deleteWork(id);
};
