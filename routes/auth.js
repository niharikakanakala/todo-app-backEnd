const express = require("express");
const authroutes = express.Router();
const Signin = require("../models/signinSchema");
const Signinschema = require("../models/signin");
const schema = require("../models/validation");
var bcrypt = require("bcryptjs");

authroutes.post("/register", async (req, res) => {
  //validating the data
  const { error } = schema.validate(req.body);
  if (error) return res.send(error.details[0].message);

  const emailexist = await Signin.findOne({ email: req.body.email });
  if (emailexist) return res.status(400).send("email alread exist");

  var salt = await bcrypt.genSalt(10);
  var hashPassword = await bcrypt.hash(req.body.password, salt);

  // creating a new user
  const user = new Signin({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const saveduser = await user.save();
    res.send(saveduser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//login
authroutes.post("/signin", async (req, res) => {
  const { error } = Signinschema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await Signin.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("email not exist");
  const validpassword = await bcrypt.compare(req.body.password, user.password);
  if (!validpassword) return res.status(400).send("invalid password");

  res.send("sign in");
});

module.exports = authroutes;
