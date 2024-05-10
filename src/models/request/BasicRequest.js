const Joi = require('joi');
const Validator = require('../../shared/Validator');

class BasicRequest {
  constructor(name, label, email, phone, summary, location, profiles) {
    this.name = name;
    this.label = label;
    this.email = email;
    this.phone = phone;
    this.summary = summary;
    this.location = location || '';
    this.profiles = profiles || []; // Asignar un array vacío si profiles es undefined
  }

  static schema() {
    return {
      name: { type: 'string', description: 'Name of the basic' },
      label: { type: 'string', description: 'Label of the basic' },
      email: { type: 'string', description: 'Email of the basic' },
      phone: { type: 'string', description: 'Phone of the basic' },
      summary: { type: 'string', description: 'Summary of the basic' },
      location: { type: 'LocationRequest', description: 'Location of the basic' },
      profiles: { type: 'array||ProfileRequest', description: 'Profiles of the basic' }
    };
  }

  static validate(data) {
    const schema = Joi.object({
      name: Joi.string().required(),
      label: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      summary: Joi.string().required(),
      location: Joi.object().optional(),
      profiles: Joi.array().items(Joi.object()).optional(),
    });

    return Validator.validate(data, schema); // Llama al método estático validate de Validator
  }

  static createFromRequest(data) {
    const validatedData = this.validate(data);
    return new BasicRequest(
      validatedData.name,
      validatedData.label,
      validatedData.email,
      validatedData.phone,
      validatedData.summary,
      validatedData.location,
      validatedData.profiles
    );
  }
}

module.exports = BasicRequest;
