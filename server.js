const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "src")));

app.listen(3000, () =>
  console.log("Desktop running at http://localhost:3000/public")
);
