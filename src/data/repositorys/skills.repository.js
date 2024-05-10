const Skill = require('../models/shema').Skill; // Import the Mongoose skill model

// Functions to interact with MongoDB as a database
exports.getAllSkills = async () => {
  try {
    const skills = await Skill.find(); // Query all skills in MongoDB
    return skills;
  } catch (error) {
    throw new Error('Error retrieving all skills');
  }
};

exports.getSkillById = async (id) => {
  try {
    const skill = await Skill.findById(id); // Find a skill by its ID in MongoDB
    return skill;
  } catch (error) {
    throw new Error('Error retrieving skill by ID');
  }
};

exports.createSkill = async (newSkill) => {
  try {
    const skill = new Skill(newSkill); // Create a new Skill instance with the provided data

    const createdSkill = await skill.save(); // Save the new skill to the database

    return createdSkill;
  } catch (error) {
    throw new Error('Error creating a new skill');
  }
};

exports.updateSkill = async (id, updatedSkill) => {
  try {
    const skill = await Skill.findByIdAndUpdate(id, updatedSkill, { new: true }); // Find and update the skill by its ID
    if (!skill) {
      throw new Error('Skill not found');
    }
    return skill;
  } catch (error) {
    throw new Error('Error updating the skill');
  }
};

exports.deleteSkill = async (id) => {
  try {
    const deletedSkill = await Skill.findByIdAndDelete(id); // Find and delete the skill by its ID
    if (!deletedSkill) {
      throw new Error('Skill not found');
    }
    return deletedSkill;
  } catch (error) {
    throw new Error('Error deleting the skill');
  }
};
