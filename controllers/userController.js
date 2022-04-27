const User = require('../models/userModel')
const asyncHandler = require('express-async-handler');
const res = require('express/lib/response');
const generateToken = require('../controllers/generateToken')
const registerUser = asyncHandler (async( req, res ) => {
  const { name,email, password, pic } = req.body;
  if(!name ||!email || !password) {
    res.status(400)
    throw new Error("Please enter all the felids")
  }
  const userExists = await User.findOne({ email: email, password: password});
  if (userExists) {
    res.status(400);
    throw new Error("user alredy exists")
  }
  const user = await User.create({ 
    name,
    password,
    email,
    password,
    pic
  })
  if(user) {
    res.status(201).json({ 
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token:generateToken(user._id),

    })
  } else {
    res.status(404)
    throw new Error("Failed to create a new user")
  }
}) 
module.exports ={
  registerUser
}