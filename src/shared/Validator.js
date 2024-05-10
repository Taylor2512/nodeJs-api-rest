const Joi = require('joi');

class Validator {
  static validate(data, schema) {
    const { error, value } = schema.validate(data);
    if (error) {
      throw new Error(`Validation failed: ${error.message}`);
    }
    return value;
  }
}

module.exports = Validator;
