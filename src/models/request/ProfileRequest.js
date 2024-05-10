const Joi = require('joi');
const Validator = require('../../shared/Validator');
class ProfileRequest {
    constructor(id, idBasics, network, username) {

        this.idBasics = idBasics;
        this.network = network;
        this.username = username;
    }
    static schema() {
        return {
            idBasics: { type: 'string', description: 'Basic ID of the profile' },
            network: { type: 'string', description: 'Network of the profile' },
            username: { type: 'string', description: 'Username of the profile' }
        };
    }
    static validate(data) {
        const schema = Joi.object({
       
            idBasics: Joi.string().required(),
            network: Joi.string().required(),
            username: Joi.string().required()
        });
        return Validator.validate(data, schema);
    }
    static createFromRequest(data) {
        const validatedData = this.validate(data);
        return new ProfileRequest(

            validatedData.idBasics,
            validatedData.network,
            validatedData.username
        );
    }
}
 

module.exports = ProfileRequest;
