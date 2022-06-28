const express = require("express");
const mongoose = require("mongoose");
const port = 3030;

const app = express();

app.listen(port, () => {
  console.log(`iam all set in port ${port}`);
});
