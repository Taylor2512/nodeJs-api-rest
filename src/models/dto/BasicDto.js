class BasicDTO {
    constructor(id, name, label, email, phone, summary, location, profiles) {
      this.id = id;
      this.name = name;
      this.label = label;
      this.email = email;
      this.phone = phone;
      this.summary = summary;
      this.location = location;
      this.profiles = profiles;
    }
    // Función para obtener el schema del DTO
    static schema() {
      return {
        name: { type: 'string', description: 'Name of the person' },
        label: { type: 'string', description: 'Label of the person' },
        email: { type: 'string', format: 'email', description: 'Email address of the person' },
        phone: { type: 'string', description: 'Phone number of the person' },
        summary: { type: 'string', description: 'Summary of the person' },
        location: { type: 'string', description: 'Location of the person' },
        profiles: { type: 'array', items: { type: 'string', description: 'Profiles of the person' } }
      };
    }
  }
  module.exports = BasicDTO;
  