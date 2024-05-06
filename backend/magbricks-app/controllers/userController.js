const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

//Registration
const register = async (req, res) => {
    try {
      const { category, name, email, password, mobileNumber } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ category, name,email, password: hashedPassword, mobileNumber });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  };
  
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
  
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
  
    const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY);
    res.json({ token });
    // console.log(token);
  };

  
  



  module.exports = {
    register,
    login,
  }
  
