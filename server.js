require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const path = require('path')
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")

const emailController = require("./controllers/email");

const http = require("http");
const socketIo = require("socket.io");
const server = http.createServer(app);
const io = socketIo(server);

//database connection
mongoose.connect(process.env.MONGO_DB,{useNewUrlParser: true, useUnifiedTopology: true});

require("./utils/socketConnection")(io);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

app.use(function(req, res, next){ 
  if(req.protocol === "http"){
    res.redirect("https://" + req.hostname);
  }else{
    next();
  }
})


app.get("/pdf", async function (req, res, next) {
  res.sendFile(path.join(__dirname, "./client/src/images/Resume-Schwyn-Francis.pdf"))
});
// Add routes
app.use([emailController]);
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

    server.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`==> 🌎  Listening on port ${PORT}. Visit http://localhost:3000/ in your browser.`);
    });
};
startServer();