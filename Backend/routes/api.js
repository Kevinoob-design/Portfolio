//jshint esversion:6

const express = require("express");
const router = express.Router();
const About = require ("../Models/AboutModel");

let get = (req, res) => {
    About.find({}).then(resDB => {
        res.send(resDB);
    });
};

let post = (req, res) => {
    console.table(req.body);
    About.create(req.body).then(resDB => {
        res.send(resDB);
    });
};

let put = (req, res) => {

    let data  = req.body.filter(element => {
        return element.id != element.id;
    });

    About.findOneAndUpdate(req.body.id, data, (err, resDB) => {
        if (err) {
            res.send(err);
        } else {
            res.send(resDB);
        }
    });

};

let del = (req, res) => {
    console.table(req.body); 
    About.findByIdAndDelete(req.body.id, (err, resDB) => {
        if(err){
            res.send(err);
        }else{
            res.send(resDB);
        }
})};

router.route("/about").get(get).post(post).put(put).delete(del);

module.exports = router;