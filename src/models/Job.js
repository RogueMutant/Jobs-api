const mongoose = require("mongoose");

const JobsSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide name of the company"],
      max: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide your current position"],
      max: 100,
    },
    status: {
      type: String,
      enum: ["Interview", "Declined", "Pending"],
      default: "Pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide the user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobsSchema);
