const basicsRepository = require('../data/repositorys/basic.repository');
const BasicRequest = require('../models/request/BasicRequest');

exports.getAllbasics =  async  () => {
  return await basicsRepository.getAllBasics();
};

exports.getbasicById = async (id) => {
  return await basicsRepository.getBasicById(id);
};

exports.createBasic = async (basic) => {
  return await basicsRepository.createBasic(basic);
}

exports.updateBasic = async (id, updatedBasic) => {
  return await basicsRepository.updateBasic(id, updatedBasic);
}

exports.deleteBasic = async (id) => {
 return await basicsRepository.deleteBasic(id);
} 