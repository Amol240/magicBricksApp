require('dotenv').config();
const express = require("express");
const { register, login} = require("../controllers/userController");
const authenticateToken = require('../middlewares/authenticateToken');

const usersRouter = express.Router();


usersRouter.post("/register", register);
usersRouter.post("/login", login);


module.exports = usersRouter;
