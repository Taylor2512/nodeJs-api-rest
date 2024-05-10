const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema para Basics
const basicsSchema = new Schema({
  id: Number,
  name: String,
  label: String,
  email: String,
  phone: String,
  summary: String,
  location: {
    idBasic: Number,
    address: String,
    city: String,
    country: String
  },
  profiles: [{
    idBasics: Number,
    network: String,
    username: String
  }]
});

// Esquema para Work
const workSchema = new Schema({
  id: Number,
  name: String,
  location: String,
  description: String,
  position: String,
  startDate: Date,
  endDate: Date,
  highlights: [String]
});

// Esquema para Education
const educationSchema = new Schema({
  id: Number,
  institution: String,
  url: String,
  area: String,
  studyType: String,
  startDate: Date,
  endDate: Date,
  score: Number,
  courses: [String]
});

// Esquema para Skill
const skillSchema = new Schema({
  id: Number,
  name: String,
  level: String
});

// Crear modelos basados en los esquemas
const Basics = mongoose.model('Basics', basicsSchema);
const Work = mongoose.model('Work', workSchema);
const Education = mongoose.model('Education', educationSchema);
const Skill = mongoose.model('Skill', skillSchema);

module.exports = { Basics, Work, Education, Skill };
