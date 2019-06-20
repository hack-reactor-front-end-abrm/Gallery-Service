const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const getListingByID = require("../database/helpers/getListingByID.js");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.static("client/dist"));

app.get("/:number", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/"));
});

app.get("/api/:id", (req, res) => {
  getListingByID(req.params.id).then(({ dataValues: listingInfo }) => {
    res.send(listingInfo);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Connected to Express server on Port 3000");
});
