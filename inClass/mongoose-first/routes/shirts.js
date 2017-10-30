const express = require("express");
const shirtRoutes = express.Router();
const Shirt = require("../models/shirt")

shirtRoutes.get("/", (req, res) => {
  // Get the shirt array from the database
  Shirt.find((err, shirts) => {
          //its set response status to 500
    if (err) return res.status(500).send(err);
    return res.send(shirts)
  });
});

shirtRoutes.get("/:id", (req, res) => {
  Shirt.findById(req.params.id, (err, shirt) => {
    if (err) return res.status(500).send(err);
    return res.send(shirt);
  });
});


shirtRoutes.post("/", (req, res) => {
  const brandNewShirt = new Shirt(req.body);
  brandNewShirt.save((err, newShirtThayWasJustSaved) => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(newShirtThayWasJustSaved);
  });
});

shirtRoutes.put("/:id", (req, res) => {
  Shirt.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, shirt) => {
    if (err) return res.status(500).send(err);
    return res.send(shirt);
  });
});

shirtRoutes.delete("/:id", (req, res) => {
  Shirt.findByIdAndRemove(req.params.id, (err, shirt) => {
    if (err) return res.status(500).send(err);
    return res.send(shirt);
  });
});

module.exports = shirtRoutes;
