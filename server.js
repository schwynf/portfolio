require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const path = require('path')
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")
const cors = require('cors');

const emailController = require("./controllers/email");

const http = require("http");
const socketIo = require("socket.io");
const server = http.createServer(app);
const io = socketIo(server);

//database connection
mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost:27017/portfolio', { useNewUrlParser: true, useUnifiedTopology: true });

//socket connection
require("./utils/socketConnection")(io);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//CORS Middleware --allows api access to other websites
app.use(cors())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Add routes
app.get("/pdf", async function (req, res, next) {
  res.sendFile(path.join(__dirname, "./client/src/images/Resume-Schwyn-Francis.pdf"))
});
app.use([emailController]);
app.use((req, res) => {
  if (process.env.NODE_ENV === 'production') {
    console.log("index file being called")
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  } else {
    res.sendFile(path.join(__dirname, './client/public/index.html'))
  }
});

// Server
server.listen(PORT, () => {
  console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:3000/ in your browser.`);
});
