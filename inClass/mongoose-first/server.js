const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

//*2
mongoose.connect("mongodb://localhost/duck-shirts", (err) => {
  if (err) throw err;
  console.log("Connected to the database")
});


// const Schema = mongoose.Schema;
app.use("/shirts", require("./routes/shirts"))

// const Schema = mongoose.Schema;

app.listen(port, () => {
  console.log(`App is listening on Port ${port}`);
});

// mongoose.connect("mongodb://localhost/duck-shirts", (err) => {
//   if (err) throw err;
//   console.log("Connected to the database")
// });
