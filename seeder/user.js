require("dotenv").config();
let mongoose = require("mongoose");
let db = require("../models");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let userSeed = 
  {
    email: "schwynf@gmail.com",
    password: bcrypt.hashSync("cool", bcrypt.genSaltSync(8))
  };




let start = async ()=> {
  console.time()
  await db.User.deleteMany({})
  let data = await db.User.create(userSeed);
  console.log(data);
  console.timeEnd()
  process.exit(0);
}

start();