require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const path = require('path');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const http = require("http");
const socketIo = require("socket.io");
const server = http.createServer(app);
const io = socketIo(server);
const mongoose = require("mongoose");
const emailController = require("./controllers/email");

//database connection
const dbConnection = (process.env.NODE_ENV === 'production') ? process.env.MONGO_DB : 'mongodb://localhost:27017/portfolio';
mongoose.connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true });

//socket connection
require("./utils/socketConnection")(io);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Add routes
app.get("/pdf", async function (req, res, next) {
  res.sendFile(path.join(__dirname, "./client/src/images/schwynFrancis-resume.pdf"));
});
app.use([emailController]);
app.use((req, res) => {
  (process.env.NODE_ENV === 'production') ? res.sendFile(path.join(__dirname, "./client/build/index.html")) : res.sendFile(path.join(__dirname, './client/public/index.html'));
});

// Server
server.listen(PORT, () => {
  console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:3000/ in your browser.`);
});
