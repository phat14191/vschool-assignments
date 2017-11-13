let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let legoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    piecs: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Lego", legoSchema);
