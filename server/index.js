const express = require("express");
const app = express();
const port = process.env.port || 4040;
require("dotenv").config();
//Enabling express to use body of the request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//CORS
const cors = require("cors");
app.use(cors());
const path = require("path");

//Database Connection
const mongoose = require("mongoose");
// to print incoming requests from mongoose in the terminal
mongoose.set("debug", true);
async function connecting() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to the DB");
  } catch (error) {
    console.log("ERROR: DB is not running! Start it up!");
  }
}

connecting();

//ROUTES
// app.use("/closet", require("./routes/closet.routes"))
app.use("/users", require("./routes/users.routes"));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

//START SERVER
app.listen(port, () => console.log(`Server listening on port: ${port}`));
