const Joi = require('joi');
const Validator = require('../../shared/Validator');
class SkillRequest {
    constructor(id, name, level) {

        this.name = name;
        this.level = level;
    }
    static schema() {
        return {
       
            name: { type: 'string', description: 'Name of the skill' },
            level: { type: 'string', description: 'Level of the skill' }
        };
    }
    static validate(data) {
        const schema = Joi.object({
           
            name: Joi.string().required(),
            level: Joi.string().required()
        });
        return Validator.validate(data, schema);
    }
    static createFromRequest(data) {
        const validatedData = this.validate(data);
        return new SkillRequest(
         
            validatedData.name,
            validatedData.level
        );
    }
}

module.exports = SkillRequest;