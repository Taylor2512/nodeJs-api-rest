const Work = require('../models/shema').Work; // Importa el modelo de trabajo de Mongoose

// Funciones para interactuar con MongoDB como una base de datos
exports.getAllWork = async () => {
  try {
    const works = await Work.find(); // Consulta todos los trabajos en MongoDB
    return works;
  } catch (error) {
    throw new Error('Error al obtener todos los trabajos');
  }
};

exports.getWorkById = async (id) => {
  try {
    const work = await Work.findById(id); // Busca un trabajo por su ID en MongoDB
    return work;
  } catch (error) {
    throw new Error('Error al obtener el trabajo por ID');
  }
};

exports.createWork = async (newWork) => {
  try {
    const existingWork = await Work.findOne({ name: newWork.name }); // Verifica si ya existe un trabajo con el mismo nombre
    if (existingWork) {
      throw new Error('WorkAlreadyExistsException: Work with the same name already exists');
    }

    const createdWork =   Work(newWork); // Crea un nuevo trabajo en MongoDB
    createdWork= await createdWork.save(); // Guarda el nuevo trabajo en la base de datos
    return new WorkDTO(createdWork._id, createdWork.name, createdWork.position, createdWork.company, createdWork.startDate, createdWork.endDate, createdWork.description);
  } catch (error) {
    throw new Error('Error al crear un nuevo trabajo '+error.message);
  }
};

exports.updateWork = async (id, updatedWork) => {
  try {
    const work = await Work.findByIdAndUpdate(id, updatedWork, { new: true }); // Encuentra y actualiza el trabajo por su ID
    if (!work) {
      throw new Error('WorkNotFoundException: Work information not found');
    }
    return work;
  } catch (error) {
    throw new Error('Error al actualizar el trabajo');
  }
};

exports.deleteWork = async (id) => {
  try {
    const deletedWork = await Work.findByIdAndDelete(id); // Encuentra y elimina el trabajo por su ID
    if (!deletedWork) {
      throw new Error('WorkNotFoundException: Work information not found');
    }
    return deletedWork;
  } catch (error) {
    throw new Error('Error al eliminar el trabajo');
  }
};
