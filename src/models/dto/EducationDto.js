class EducationDto {
    constructor(id, institution, url, area, studyType, startDate, endDate, score, courses) {
        this.id = id;
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
            id: { type: 'number', description: 'ID of the education' },
            institution: { type: 'string', description: 'Name of the institution' },
            url: { type: 'string', description: 'URL of the institution' },
            area: { type: 'string', description: 'Area of study' },
            studyType: { type: 'string', description: 'Type of study' },
            startDate: { type: 'string', format: 'date', description: 'Start date of the education' },
            endDate: { type: 'string', format: 'date', description: 'End date of the education' },
            score: { type: 'number', description: 'Score of the education' },
            courses: { type: 'array', items: { type: 'string', description: 'Courses taken' } }
        };
    }
}

module.exports = EducationDto;