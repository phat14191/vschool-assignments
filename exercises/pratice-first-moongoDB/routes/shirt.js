//create new route
const express = require("express");
const shirtRoutes = express.Router();

//*9 use post so need this
const bodyParser = require("body-parser");

// *7
const Shirt = require("../models/shirt");

shirtRoutes.get("/", (req, res) => {
  //Get the shirts array from the database
  //specific of moogose we create ->  *7
  //look at shirt collection and find
  //find can take multi
  //if want get shirts just put right ez
  Shirt.find({}, (err, shirts) => {
    //handle that error
    //what is res.status doing: its set response to 500
    if (err) return res.status(500).send(err);
    return res.send(shirts);
  });
});

//this time find 1 shirt, access 1 id submit to url
shirtRoutes.get("/:id", (req, res) => {
  //look  on whatever have that id it would look whole array and find the one have that id
  //use find always send back array, dont want have array and return server so use findOne
  //findOne can return an Object
  Shirt.findById({_id: req.params.id}, (err, shirt) => {
    if (err) return res.status(500).send(err);
    return res.send(shirt);
  })
     //or we can use spead operator but take extra of work
  // Shirt.find({_id: req.params.id}, (err, shirt) => {
  //   res.send(...shirt);
  // })
})


//create post use bodyParser -> *9 -> server.js and *10
shirtRoutes.post("/", (req, res) => {
  // object req.body is object so no {} inside Shirt ({})
  const brandNewshirt = new Shirt(req.body);
  //wanna check err and success send same get first one so call back function
  brandNewshirt.save((err, newShirtThatWasJustSaved) => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(newShirtThatWasJustSaved);
    //when use without character required => send to status 500
  });
});

shirtRoutes.put("/:id", (req, res) => {
  //findByIdAndUpdate going to take more parraneter
            //find find, second
  Shirt.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, shirt) => {
    if (err) return res.status(500).send(err);
    return res.send(shirt);
  });
  // Shirt.findById(req.params.id, (err, shirt) => {
  //   if (err) return res.status(500).send(err);
  //   shirt.character = req.body.character || shirt.character
  //   shirt.price = req.body.price;
  //
  //   shirt.save((err, shirt) => {
  //     if (err) return res.status(500).send(err);
  //     return res.send(shirt);
  //   });
  // });
});

shirtRoutes.delete("/:id", (req, res) => {
  Shirt.findByIdAndRemove(req.params.id, (err, shirt) => {
    if (err) return res.status(500).send(err);
    return res.send(shirt);
  });
});

module.exports = shirtRoutes;












//
