
const passport = require("passport");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/jwt-config");
const db = require("../models");
const bcrypt = require("bcrypt");

require("../config/passport")(passport);

router.get("/loginCheck", (req, res) => {
    if (req.cookies.swagggg === undefined) {
        res.json({ loggedIn: false });
    } else {
        res.json({ loggedIn: true });
    }
});

router.post("/login", async (req, res) => {
    let data = await db.User.find({ email: req.body.email });
    data = data[0]
    if (!data) {
        res.json({ user: false })
    }
    if (!bcrypt.compareSync(req.body.password, data.password)) {
        res.json({ user: false })
    }
    if (req.cookies.swaggg) {
        res.clearCookie("swagggg");
    }
    const payload = {
        email: req.body.email,
        expire: Date.now()
    };
    const token = jwt.sign(JSON.stringify(payload), jwtSecret.secret);
    res.cookie("swagggg", token, { httpOnly: true, secure: false, expire: { maxAge: 600000 } });
    res.json({ user: true})
});

router.delete("/logout", (req, res) => {
    if (req.cookies.swagggg) {
        res.clearCookie("swagggg");
        res.json({ logOut: true });
    } else {
        res.json({ logOut: true });
    }
});

module.exports = router;