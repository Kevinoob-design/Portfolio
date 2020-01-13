//jshint esversion:6

const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

mongoose.connect("mongodb://localhost/portfolio");
// mongoose.Promise = global.Promise;

const app = new express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//Accessing to the different available routes.
app.use("/about/api", require("./routes/api"));

app.listen(process.env.PORT || 3001, function () {
    console.log("Running");
});