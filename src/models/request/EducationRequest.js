const Joi = require('joi');
const Validator = require('../../shared/Validator');
class EducationRequest {
    constructor(institution, url, area, studyType, startDate, endDate, score, courses) {

        this.institution = institution;
        this.url = url;
        this.area = area;
        this.studyType = studyType;
        this.startDate = startDate;
        this.endDate = endDate;
        this.score = score;
        this.courses = courses;
    }
    static schema() {
        return {
            institution: { type: 'string', description: 'Institution of the education' },
            url: { type: 'string', description: 'URL of the education' },
            area: { type: 'string', description: 'Area of the education' },
            studyType: { type: 'string', description: 'Study type of the education' },
            startDate: { type: 'string', description: 'Start date of the education' },
            endDate: { type: 'string', description: 'End date of the education' },
            score: { type: 'string', description: 'Score of the education' },
            courses: { type: 'string', description: 'Courses of the education' }
        };
    }
    static validate(data) {
        const schema = Joi.object({
            institution: Joi.string().required(),
            url: Joi.string().uri().required(),
            area: Joi.string().required(),
            studyType: Joi.string().required(),
            startDate: Joi.string().required(),
            endDate: Joi.string().required(),
            score: Joi.string().optional(),
            courses: Joi.array().items(Joi.string()).optional()
        });
        return Validator.validate(data, schema);
    }
    static createFromRequest(data) {
        const validatedData = this.validate(data);
        return new EducationRequest(

            validatedData.institution,
            validatedData.url,
            validatedData.area,
            validatedData.studyType,
            validatedData.startDate,
            validatedData.endDate,
            validatedData.score,
            validatedData.courses
        );
    }
}

module.exports = EducationRequest;