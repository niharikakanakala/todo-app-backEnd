const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/api");
const authRoutes = require("./routes/auth");
const router = require("./routes/route");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// initialize routes
app.use("/api", todoRoutes);
app.use("/user", authRoutes);
app.use("/user", router);
mongoose
  .connect(
    "mongodb+srv://niharika:7U8ZaHrrx6iUVcFh@cluster0.wzi38.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(4000);
  });
//7U8ZaHrrx6iUVcFh
//mongodb+srv://niharika:7U8ZaHrrx6iUVcFh@cluster0.wzi38.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
