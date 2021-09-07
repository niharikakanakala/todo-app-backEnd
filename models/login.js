const mongoose = require("mongoose");

const lLogin = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  id: {
    type: String,
  },
});

export default mongoose.model("Login", Login);
