const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const uuid = require("uuid/v4");
const morgan = require("morgan");
const port = process.env.PORT || 8500;
const utils = require("./utils");

const routers = require("./routes");

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(utils.explosion);

app.use(routers);

app.listen(port, () => {
  console.log(`Server is listen on port ${port}`);
})
