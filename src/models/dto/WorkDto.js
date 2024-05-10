class WorkDto {
    constructor(id, name, location, description, position, startDate, endDate, highlights) {
        this.id = id;
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
            id: { type: 'string', description: 'ID of the work' },
            name: { type: 'string', description: 'Name of the work' },
            location: { type: 'string', description: 'Location of the work' },
            description: { type: 'string', description: 'Description of the work' },
            position: { type: 'string', description: 'Position of the work' },
            startDate: { type: 'string', description: 'Start date of the work' },
            endDate: { type: 'string', description: 'End date of the work' },
            highlights: { type: 'string', description: 'Highlights of the work' }
        };
    }
}

module.exports = WorkDto;