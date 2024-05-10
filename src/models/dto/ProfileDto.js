
class ProfileDto {
    constructor(id, idBasics, network, username) {
        this.id = id;
        this.idBasics = idBasics;
        this.network = network;
        this.username = username;
    }
    static schema() {
        return {
            id: { type: 'string', description: 'ID of the profile' },
            idBasics: { type: 'string', description: 'Basic ID of the profile' },
            network: { type: 'string', description: 'Network of the profile' },
            username: { type: 'string', description: 'Username of the profile' }
        };
    }
}
 

module.exports = ProfileDto;
