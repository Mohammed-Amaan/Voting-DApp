const mongoose = require("mongoose");
const candidateSchema = mongoose.Schema(
  {
    CandidateId: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Enter Candidate name"],
      unique: [true, "Candidate Exists"],
      index: true,
    },
    position: {
      type: String,
      required: [true, "Enter Candidature Position"],
    },
    ipfsPhotoUrl: {
      type: String,
    },
    NumberOfVotes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
