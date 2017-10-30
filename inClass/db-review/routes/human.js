const express = require("express");
const humanRoute = express.Router();
const HumanModel = require("../models/human");

humanRoute.get("/", (req, res) => {
  HumanModel.find(req.query, (err, humans) => {
    if(err) {
    console.log(err);
    } else {
      res.send(humans);
    }
  });
});

humanRoute.post("/", (req, res) => {
  let newHuman = new HumanModel(req.body);
  newHuman.save((err, savedHuman) => {
    if(err) {
    console.log(err);
    } else {
      res.send(savedHuman);
    }
  });
});

humanRoute.get("/:id", (req, res) => {
  HumanModel.findById(red.params.id, (err, foundHuman) => {
    if(err) {
    console.log(err);
    } else {
      res.send(foundHuman);
    }
  })
})

humanRoute.put("/:id", (red, res) => {
  HumanModel.finByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedHuman) => {
    if(err) {
    console.log(err);
    } else {
      res.send(updatedHuman);
    }
  })
});

humanRoute.delete("/:id", (req, res) => {
  HumanModel.findByIdAndRemove(req.params.id, (err, deletedHuman) => {
    if(err) {
    console.log(err);
    } else {
      res.send({message: "item remove successly"});
    }
  })
})

module.exports = humanRoute;
