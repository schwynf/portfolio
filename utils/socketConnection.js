const db = require("../models");
let userCounter = 0

module.exports = io => {
    io.on("connection", (socket) => {
        io.emit("activeUsersOnWebsite", ++userCounter)
        console.log("number of users on website" + " " + userCounter);

        socket.on('disconnect', () => {
            io.emit("activeUsersOnWebsite", --userCounter)
            console.log("number of users on website" + " " + userCounter);
        });

    });
};