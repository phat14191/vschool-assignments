const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shirtSchema = new Schema({
  character: {
    type: String,
    required: true
  },
  price: Number,
  colorOptions: [String],
  sizeOptions: [{
    type: String,
    enum: ["XSmall", "Small", "Medium", "Large"]
  }],
  sleeveless: {
    type: Boolean,
    default: true
  },
  fabric: {
    waterproof: Boolean,
    kind: String,
    glowInDark: {
      type: Boolean,
      default: true
    }
  }
});

module.exports = mongoose.model("Shirt", shirtSchema);
