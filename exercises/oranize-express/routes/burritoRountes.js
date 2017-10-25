const express = require("express");
const burritosRoutes = express.Router();

burritosRoutes.get("/", (req, res) => {
    res.send("GET ALL tacos");
});

//*6 when u do *5 u need to delete tacos/tacos
burritosRoutes.get("/:id", (req, res) => {
    res.send("GET ONE taco");
});

burritosRoutes.post("/", (req, res) => {
    res.send("POST burritos");
});

burritosRoutes.put("/:id", (req, res) => {
    res.send("PUT burritos");
});

burritosRoutes.delete("/:id", (req, res) => {
    res.send("DELETE burritos");
});

module.exports = burritosRoutes;
