const express = require("express");
const mongoose = require("mongoose");

const todoRoutes = require("./routes/api");

const app = express();
app.use(express.json());
//app.use(cors());
// initialize routes
app.use("/api", todoRoutes);

mongoose
  .connect(
    "mongodb+srv://niharika:7U8ZaHrrx6iUVcFh@cluster0.wzi38.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(4000);
  });
//7U8ZaHrrx6iUVcFh
//mongodb+srv://niharika:7U8ZaHrrx6iUVcFh@cluster0.wzi38.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
