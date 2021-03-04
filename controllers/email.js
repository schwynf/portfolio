const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../models");
const nodemailer = require('nodemailer');
const path = require('path')

router.post("/email", async function (req, res, next) {
   try {
    let emailData = await db.Email.create(req.body);
    res.json(emailData);
       
   } catch (error) {
       console.log(error)
   }
});

router.get("/email", async function (req, res) {
        try {
            console.log("----------" + req.protocol + " " + req.hostname + "-------------");
                let emailData = await db.Email.find({}).sort({date: -1})
                // res.redirect("https://www.google.com");
                res.json(emailData);
            }   catch (error) {
            console.log(error);
        }
});


module.exports = router;