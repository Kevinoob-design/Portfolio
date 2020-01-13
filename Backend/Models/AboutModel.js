//jshint esversion:6

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutSchema = new Schema(
{
    "title": {
        type: String,
        require: [true, "Title is required"]
    },

    "img": {
        "url": {
            type: String,
            require: false
        },
        "alt": {
            type: String,
            require: false
        }
    },

    "description": {
        type: String,
        require: true
    }
});

const About = mongoose.model("about", AboutSchema);

module.exports = About;