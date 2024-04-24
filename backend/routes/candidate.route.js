const express = require("express");
const router = express.Router();
const requireAuth = require("../../backend/middleware/authMiddleware");
const {
  addCandidate,
  viewCandidates,
  updateCandidate,
} = require("../controller/candidate.controller");
// router.use("*", requireAuth);
router.post("/add", addCandidate);
router.get("/view", viewCandidates);
router.put("/update/:CandidateId", updateCandidate);
module.exports = router;
