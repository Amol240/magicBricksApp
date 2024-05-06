const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Buyer/Owner/Tenant', 'Agent', 'Builder'],
        // required: true,
    },
    name: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },

    password: {
        type: String,
        required:true,
    },
    mobileNumber:{
        type: String,
        required:true,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;