const Basics = require('../models/shema').Basics;

exports.getAllBasics = async () => {
  try {
    const basics = await Basics.find();
    return basics;
  } catch (error) {
    console.error('Error fetching all basics:', error);
    throw error;
  }
};

exports.getBasicById = async (id) => {
  try {
    const basic = await Basics.findOne({ id });
    return basic;
  } catch (error) {
    console.error('Error fetching basic by ID:', error);
    throw error;
  }
};

exports.createBasic = async (basic) => {
  try {
    const newBasic = new Basics(basic);
    const savedBasic = await newBasic.save();
    return savedBasic;
  } catch (error) {
    console.error('Error creating basic:', error);
    throw error;
  }
};

exports.updateBasic = async (id, updatedBasic) => {
  try {
    const basic = await Basics.findOneAndUpdate({ id }, updatedBasic, { new: true });
    return basic;
  } catch (error) {
    console.error('Error updating basic:', error);
    throw error;
  }
};

exports.deleteBasic = async (id) => {
  try {
    const basic = await Basics.findOneAndDelete({ id });
    return basic;
  } catch (error) {
    console.error('Error deleting basic:', error);
    throw error;
  }
};
