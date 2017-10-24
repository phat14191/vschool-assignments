const express = require("express");
//dont need "./" because in node module
const app = express();
//app combine a lot of message;
const bodyParser = require("body-parser");
const uuid = require("uuid/v4");
//open up receiving get()
    // app.get()
    // app.post()
    // app.put()
    // app.delete()

const tacos = [

];

app.use(bodyParser.json());
// will take object punch of

app.get("/tacos", (request, response) => {
  response.send(tacos);
});

app.post("/tacos", (request, response) => {
  // let taco = req.body;
  // taco._id = uuid()
  // tacos.push(taco);
  // response.send(taco);

  request.body._id = uuid()
  tacos.push(request.body);
  response.send(request.body);
  console.log(tacos);
})

// :value
app.delete("/tacos/:id", (request, response) => {
  console.log(request.params);
  //with the id, find object in database, and remove it]
  tacos = tacos.filter((taco) => {
    return taco._id !== request.params.id
  });
  response.send({
    message: "ITEM REMOVED SUCCESSFULLY"
  })
  //send bak confirmation
})

app.put("/tacos/:id", (request, response) => {
  //with the id, find object in database and replace it with request.body
  let newTaco = request.body
  tacos = tacos.map((taco) => {
    if(taco._id === request.params.id) {
      return newTaco = Object.assign(taco, newTaco);
    } else {
      return taco
    }
  })
  resquest.send(newTaco);
})

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
