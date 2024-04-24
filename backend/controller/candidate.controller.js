const Candidate = require("../models/candidate.model");

const addCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.create(req.body);
    res.status(200).json(candidate);
  } catch (error) {
    res.status(400).json(error);
  }
};
const viewCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find({});
    res.status(200).json(candidates);
  } catch (error) {
    res.status(400).json(error);
  }
};
const updateCandidate = async (req, res) => {
  try {
    const { CandidateId } = req.params;
    const candidate = await Candidate.updateOne(
      { CandidateId: CandidateId },
      req.body
    );
    if (!candidate) {
      throw new Error("candidate not found");
    }
    const updatedCandidate = await Candidate.find({ CandidateId: CandidateId });
    res.status(200).json(updatedCandidate);
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = { addCandidate, viewCandidates, updateCandidate };
