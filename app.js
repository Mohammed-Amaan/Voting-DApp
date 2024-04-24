const express = require("express");
const mongoDB = require("./database/config");
require("dotenv").config();
const app = express();
const cors = require("cors");
const { PORT } = process.env;
const authAPI = require("./backend/routes/auth.route");
const candidateAPI = require("./backend/routes/candidate.route");
const cookieParser = require("cookie-parser");

app.get("/home", (req, res) => {
  res.send("voting Dapp");
});
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(express.json());
app.use("/candidate", candidateAPI);
app.use("/auth", authAPI);
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
