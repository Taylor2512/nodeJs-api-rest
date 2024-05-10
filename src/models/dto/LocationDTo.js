class LocationDTO {
    constructor(id, idBasic, address, city, country) {
        this.id = id;
        this.idBasic = idBasic;
        this.address = address;
        this.city = city;
        this.country = country;
    }

    static schema() {
        return {
            id: { type: 'string', description: 'ID of the location' },
            idBasic: { type: 'string', description: 'Basic ID of the location' },
            address: { type: 'string', description: 'Address of the location' },
            city: { type: 'string', description: 'City of the location' },
            country: { type: 'string', description: 'Country of the location' }
        };
    }
}

module.exports = LocationDTO;