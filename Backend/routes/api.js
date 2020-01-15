//jshint esversion:6

require("dotenv").config();
const express = require("express");
const router = express.Router();
const Contact = require ("../Models/ContactModel");
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
  },
  tls: {
      rejectUnauthorized: false
  }
});
const output = `

    <h1>You have receive your firs contact request!!</h1>
    <p>Congrats the emails does work</p>
`

let get = (req, res, next) => {
    Contact.find({}).then(resDB => {
        res.send(resDB);
    }).catch(next);
};

let post = (req, res, next) => {
    console.table(req.body);

    var message = {
        from: req.body.ContactEmail,
        to: process.env.EMAIL,
        subject: req.body.Subject,
        text: req.body.Details,
        html: output
    };

    Contact.create(req.body).then(resDB => {
        transporter.sendMail(message, (err, info) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(info);
            }
        });
        res.redirect("/");
    }).catch(next);
};

let put = (req, res, next) => {
    console.table(req.body);
    let id  = req.body.id;
    delete req.body[id];

    console.table(req.body);

    Contact.findOneAndUpdate(id, req.body, (err, resDB) => {
        if (err) {
            res.send(err);
        } else {
            res.send(resDB);
        }
    }).catch(next);

};

let del = (req, res, next) => {
    console.table(req.body); 
    Contact.findByIdAndDelete(req.body.id, (err, resDB) => {
        if(err){
            res.send(err);
        }else{
            res.send(resDB);
        }
}).catch(next)};

router.route("/contact").get(get).post(post).put(put).delete(del);

module.exports = router;