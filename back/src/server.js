const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const databaseConfig = require("./config/database");
const routes = require("./routes");

const app = express();

const mongodb = mongoose.connect(databaseConfig.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(8000);
