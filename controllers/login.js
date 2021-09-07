var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var config = require("../config");

const { login } = require("../models/login");
