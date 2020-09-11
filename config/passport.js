const JwtStrategy = require("passport-jwt").Strategy;
const jwtSecret = require("./jwt-config");
const db = require("../models");

module.exports = passport => {
  const opts = {
    jwtFromRequest: req => {
      return req.cookies.swagggg;
    },
    secretOrKey: jwtSecret.secret
  };

  passport.use(
    "swagggg",
    new JwtStrategy(opts, async (jwtpayload, cb) => {
      const data = await db.User.find({email:jwtpayload.email});
      console.log(data)
      if (data) {
        return cb(null, data[0], {loggedIn:true});
      } else {
        return cb(null, false);
      }
    })
  );
};

