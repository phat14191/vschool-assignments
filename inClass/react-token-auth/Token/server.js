let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let morgan = require("morgan");
let path = require("path");
let cors = require("cors");

//import routes
let legoRouter = require("./routes/legos.js")

//connect to db
mongoose.connect("mongodb://localhost/user-auth");

//base express app
const app = express();

//setup cors
app.use(cors());

//use routes

//setup JSON requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//setup logging
app.use(morgan("dev"));

//setup routes
app.use("/legos", legoRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[+] Starting server on port ${PORT}`);
});
