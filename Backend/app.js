//jshint esversion:6

const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/portfolio");
mongoose.set('useFindAndModify', false);

const app = new express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded()); 

//Accessing to the different available routes.
app.use("/api", require("./routes/api"));

app.use((err, req, res, next) =>{
    console.log(err);
});

app.listen(process.env.PORT || 3001, function () {
    console.log("Running");
});