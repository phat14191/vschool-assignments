const express = require("express");
const bodyPartser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 8000;
//*1
const mongoose = require("mongoose");

const humanRoutes = require("./routes/human");

const app = express();

app.use(cors());
app.use(bodyPartser.json());
app.use(morgan("dev"));

app.use("/humans", humanRoutes);

//*1
mongoose.connect("mongodb://localhost/humans", (err) => {
  if (err) throw err;
  console.log("Connected to mongoDB")
})

app.listen(PORT, () => {
  console.log("Server running on port" + PORT);
});


//connect to database -> need moongse *1
//start with model -> *2 create models
//make routes
