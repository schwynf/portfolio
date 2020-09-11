const { Schema, model } = require("mongoose");

const emailSchema = new Schema({
    name: String,
    email: String,
    message: String,
    date: {
        type: Date,
        default: Date.now()
    } 
});

const Email = model("Email", emailSchema);

module.exports = Email;