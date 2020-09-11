const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
    email: {
        type: String
    },
    password: { 
        type: String
    }
});

const Admin = model("Admin", adminSchema);

module.exports = Admin;