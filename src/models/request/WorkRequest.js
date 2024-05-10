const Joi = require('joi');
const Validator = require('../../shared/Validator');
class WorkRequest {
    constructor( name, location, description, position, startDate, endDate, highlights) {

        this.name = name;
        this.location = location;
        this.description = description;
        this.position = position;
        this.startDate = startDate;
        this.endDate = endDate;
        this.highlights = highlights;
    }
    static schema() {
        return {
     
            name: { type: 'string', description: 'Name of the work' },
            location: { type: 'string', description: 'Location of the work' },
            description: { type: 'string', description: 'Description of the work' },
            position: { type: 'string', description: 'Position of the work' },
            startDate: { type: 'datetime', description: 'Start date of the work' },
            endDate: { type: 'datetime', description: 'End date of the work' },
            highlights: { type: 'array', description: 'Highlights of the work' }
        };
    }
    static validate(data) {
        const schema = Joi.object({
          
            name: Joi.string().required(),
            location: Joi.string().required(),
            description: Joi.string().required(),
            position: Joi.string().required(),
            startDate: Joi.date().required(),
            endDate: Joi.date().required(),
            highlights: Joi.array().items(Joi.string()).optional()
        });
        return Validator.validate(data, schema);
    }
    static createFromRequest(data) {
        const validatedData = this.validate(data);
        return new WorkRequest(

            validatedData.name,
            validatedData.location,
            validatedData.description,
            validatedData.position,
            validatedData.startDate,
            validatedData.endDate,
            validatedData.highlights
        );
    }
}

module.exports = WorkRequest;