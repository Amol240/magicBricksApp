const mongoose = require("mongoose");

const {CONNECTION_STRING} = process.env;


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(CONNECTION_STRING);
    } catch (error) {
        console.log(`Error connecting to MongoDB ${error.message}`);
        process.exit(1);
    }
}


module.exports = connectDB;