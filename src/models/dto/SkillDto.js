
class Skill {
    constructor(id, name, level) {
        this.id = id;
        this.name = name;
        this.level = level;
    }
    static schema() {
        return {
            id: { type: 'string', description: 'ID of the skill' },
            name: { type: 'string', description: 'Name of the skill' },
            level: { type: 'string', description: 'Level of the skill' }
        };
    }
}

module.exports = Skill;