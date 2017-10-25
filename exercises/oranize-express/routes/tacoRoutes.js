const express = require("express");
const routerRoutes = express.Router();  //*1

routerRoutes.get("/", (req, res) => {
    res.send("GET tacos");
});

routerRoutes.get("/:id", (req, res) => {
    res.send("GET ONE taco");
});

routerRoutes.post("/", (req, res) => {
    res.send("POST burritos");
});

routerRoutes.put("/:id", (req, res) => {
    res.send("PUT burritos");
});

routerRoutes.delete("/:id", (req, res) => {
    res.send("DELETE burritos");
});

module.exports = routerRoutes; //*2
