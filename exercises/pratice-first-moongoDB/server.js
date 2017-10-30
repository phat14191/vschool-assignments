const express = require("express");
const app = express();
//use mongoose *1
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;

//*9 use post so need this
const bodyParser = require("body-parser");

//set up middleware *10
app.use(bodyParser.json());

//*2
mongoose.connect("mongodb://localhost/duck-shirts", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Connected to the database")
  }
})

//need endpoint http://
//specify already take care for routes/shirt.js so "/" when doing route
//income request start /shirts/
app.use("/shirts", require("./routes/shirt"))

//*3 Schema => *4

//*4   //create folder models new file shirt.js
//describe any shirt contain

//use mongoose to connect
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
