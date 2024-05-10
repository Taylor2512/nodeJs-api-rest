const Education = require('../models/shema').Education; // Importa el modelo de educación de Mongoose

exports.getAllEducations = async () => {
  try {
    const educations = await Education.find(); // Consulta todas las educaciones en MongoDB
    return educations.map(education => new EducationDTO(education._id, education.name, education.level, education.institution));
  } catch (error) {
    throw new Error('Error al obtener todas las educaciones');
  }
};

exports.getEducationById = async (id) => {
  try {
    const education = await Education.findById(id); // Busca una educación por su ID en MongoDB
    return education ? new EducationDTO(education._id, education.name, education.level, education.institution) : null;
  } catch (error) {
    throw new Error('Error al obtener la educación por ID');
  }
};

exports.createEducation = async (education) => {
  try {
    const newEducation = new Education(education); // Crea una nueva instancia de Educación con los datos proporcionados
    const savedEducation = await newEducation.save(); // Guarda la nueva educación en MongoDB
    return new EducationDTO(savedEducation._id, savedEducation.name, savedEducation.level, savedEducation.institution);
  } catch (error) {
    throw new Error('Error al crear una nueva educación');
  }
};

exports.updateEducation = async (id, updatedEducation) => {
  try {
    const education = await Education.findByIdAndUpdate(id, updatedEducation, { new: true }); // Encuentra y actualiza la educación por su ID
    return education ? new EducationDTO(education._id, education.name, education.level, education.institution) : null;
  } catch (error) {
    throw new Error('Error al actualizar la educación');
  }
};

exports.deleteEducation = async (id) => {
  try {
    const deletedEducation = await Education.findByIdAndDelete(id); // Encuentra y elimina la educación por su ID
    return deletedEducation ? new EducationDTO(deletedEducation._id, deletedEducation.name, deletedEducation.level, deletedEducation.institution) : null;
  } catch (error) {
    throw new Error('Error al eliminar la educación');
  }
};
