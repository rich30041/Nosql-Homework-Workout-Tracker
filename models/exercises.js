const mongoose = require("mongoose");

// Create the schema for an excercise record
const schema = mongoose.schema;
const exerciseSchema = new schema({
  name: { type: String, required: true },
  reps: { type: Number },
  sets: { type: Number },
  weight: { type: Number },
  minutes: { type: Number }
});

const Exercises = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercises;