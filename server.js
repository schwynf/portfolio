require("dotenv").config();
const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();
const path = require('path')
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")

const adminController = require("./controllers/admin");
const emailController = require("./controllers/email");

//database connection
mongoose.connect(process.env.MONGO_DB,{useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect(process.env.COSMOS_DB, {useNewUrlParser: true, useUnifiedTopology: true,})

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


// Add routes
app.use([adminController, emailController]);
app.use((req, res) => {
    switch (process.env.NODE_ENV) {
      case 'dev':
      res.sendFile(path.join(__dirname, './client/public/index.html'))
        break;
      case 'production':
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
      default:
        break;
    }
  });

// Server
const startServer = async () => {

    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:3000/ in your browser.`);
    });
};
startServer();