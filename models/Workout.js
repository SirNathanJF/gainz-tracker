// Mongoose model declartion setup.
const mongoose = require("mongoose");
// This is the mongoose schema method
const Schema = mongoose.Schema;

// Our Workout schema.
const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          required: [true, "Please specify what type of excercise this is."],
        },
        name: {
          type: String,
          required: [true, "Please specify the name of this excercise"],
        },
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,
      },
    ],
  },
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;