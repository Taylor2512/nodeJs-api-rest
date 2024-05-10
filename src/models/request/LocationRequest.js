const Joi = require('joi');
const Validator = require('../../shared/Validator');
class LocationRequest {
   
    constructor(idBasic, address, city, country) {

        this.idBasic = idBasic;
        this.address = address;
        this.city = city;
        this.country = country;
    }
    
    static schema() {
        return {
            idBasic: { type: 'string', description: 'Basic ID of the location' },
            address: { type: 'string', description: 'Address of the location' },
            city: { type: 'string', description: 'City of the location' },
            country: { type: 'string', description: 'Country of the location' }
        };
    }
    static validate(data) {
        const schema = Joi.object({
            idBasic: Joi.string().required(),
            address: Joi.string().required(),
            city: Joi.string().required(),
            country: Joi.string().required()
        });
        return Validator.validate(data, schema);
    }

    static createFromRequest(data) {
        const validatedData = this.validate(data);
        return new LocationRequest(

            validatedData.idBasic,
            validatedData.address,
            validatedData.city,
            validatedData.country
        );
    }

}

module.exports = LocationRequest;