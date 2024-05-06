const express = require("express");
const cors = require("cors");
require("dotenv").config();
const usersRouter = require("./routes/userRouter");
require("./utils/connectDB")();     //IIFE(Immediately Invoked Function Expression)
const bodyParser = require('body-parser');


const app = express();

app.use(cors());

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use("/api/v1/users", usersRouter);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));