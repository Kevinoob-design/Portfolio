//jshint esversion:6

const express = require("express");
const router = express.Router();
const Contact = require ("../Models/ContactModel");
const _ = require("lodash");

let get = (req, res, next) => {
    Contact.find({}).then(resDB => {
        res.send(resDB);
    }).catch(next);
};

let post = (req, res, next) => {
    _.camelCase(req.body);
    console.table(req.body);

    Contact.create(req.body).then(resDB => {
        res.send(resDB);
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