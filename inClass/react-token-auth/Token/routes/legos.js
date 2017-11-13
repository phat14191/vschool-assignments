let express = require("express");
let Lego = require("../models/legos");

const legoRouter = express.Router();

legoRouter.route("/")
    .get((req, res) => {
        Lego.find((err, legos) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(legos);
        });
    })
    .post((req, res)  => {
        let lego = new Lego(req.body);
        lego.save((err, newLego) => {
            if (err) return res.status(500).send(err);
            return res.status(201).send(newLego);
        })
    });

legoRouter.route("/:legoId")
    .get((req, res) => {
        Lego.findById(req.params.legoId,  (err, lego) => {
            if (err) return res.status(500).send(err);
            if (!lego) return res.status(404).send("No lego item found.");
            return res.status(200).send(lego);
        });
    })
    .put((req, res) => {
        Lego.findByIdAndUpdate(req.params.legoId, req.body, {new: true}, (err, lego) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(lego);
        });
    })
    .delete((req, res) => {
        Lego.findByIdAndRemove(req.params.legoId,
 (err, lego) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(lego);
        })
    });

module.exports = legoRouter;
