const express = require("express");

const routes = express.Router();

routes.get("/", (req, res) => {
 console.log(req.explosion);
 res.send("Success!");
});

module.exports= routes;
