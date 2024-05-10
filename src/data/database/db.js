const mongoose = require('mongoose');

const uri = "mongodb+srv://jhonmontenegro2512:gVYy0Dm9KJ6oclee@cluster0.1hcebgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
}

module.exports = connectDB;
