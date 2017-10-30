const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//*5 from mongoose
const shirtSchema = new Schema({
  character: {
    type: String,
    required: true
  },
  price: Number,
  colorOptions: [String],
  sizeOptions: [{
    type: String,
    enum: ["XS", "S", "M", "XL", "XXL"]
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


// *6
                //model take 2 param ""
const Shirt = mongoose.model("Shirt", shirtSchema);
//whatever model return will expose that module;
module.exports = Shirt;
