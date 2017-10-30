const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HumanSchema = new Schema({
  name: {
    required: true,
    type: String
  },
  age: {
    required: true,
    type: Number
  },
  specialAbilities: {
    type: String,
    enum: [
      "super strength",
      "telepathy",
      "force choke",
      "invisibility",
      "flight",
      "shifter",
      "can rember words all the time",
      "false sight"
    ]
  }
})

module.exports = mongoose.model("Human", HumanSchema);
