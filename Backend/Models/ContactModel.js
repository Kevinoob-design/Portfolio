//jshint esversion:6

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContacttSchema = new Schema({

    Name: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    ContactEmail: {
        type: String,
        required: true
    },
    AditionanContactInfo:{
        type: [{}],
        required: false
    },
    Subject: {
        type: String,
        required: true
    },
    Details: {
        type: String,
        required: true
    },
});

const Contact = mongoose.model("contact-info", ContacttSchema);

module.exports = Contact;