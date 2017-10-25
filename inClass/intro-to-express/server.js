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
  // console.log(request.query)
  // filter the response based on the query object
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
// app.delete("/tacos/:id", (request, response) => {
//   // console.log(request.params);
//   //with the id, find object in database, and remove it]
//   let found = false;
//   tacos = tacos.filter((taco) => {
//     return taco._id !== request.params.id
//   });
//   response.send({
//     message: "ITEM REMOVED SUCCESSFULLY"
//   })
//   //send bak confirmation
// })
app.delete("/tacos/:id", (request, response) => {
    let found = false;
    tacos = tacos.filter(taco => {
        if (taco._id === request.params.id) {
            found = true;
            return false;
        } else {
            return true;
        }
    });
    if (found) {
        response.send({
            message: `ITEM REMOVED SUCCESSFULLY`
        });
    } else {
        response.send({
            message: "ITEM NOT FOUND"
        });
    }
});

app.put("/tacos/:id", (request, response) => {
  //with the id, find object in database and replace it with request.body
  let newTaco = request.body
  tacos = tacos.map((taco) => {
    if(taco._id === request.params.id) {
      return (newTaco = Object.assign(taco, newTaco));
    } else {
      return taco
    }
  })
  resquest.send(newTaco);
})

app.get("/tacos/:id", (request, response) => {
  //find object with matching id, and res.send the object
  let taco = tacos.find((taco) => {
    if (taco._id === request.params.id) {
      return true;
    } else {
      return false;
    }
  });
  response.send(taco);
})

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});








// http://localhost:8000/this.is.an.endpoint
