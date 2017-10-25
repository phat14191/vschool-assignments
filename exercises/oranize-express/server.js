const express = require("express");
const app = express();
const uuid = require("uuid/v4");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
                            //*3 export from *1, *2
app.use("/tacos", require("./routes/tacoRoutes")); //*4 het app u can use it tacos route
app.use("/burritos", require("./routes/burritoRountes")); //*4     //*5 add "/burritos"

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
