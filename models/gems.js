const mongoose = require("mongoose");
const gemsSchema = mongoose.Schema({
  gems_color: String,
  gems_breed: String,
  gems_price: {
    type: Number,
    required: true,
    min: [0, "Price must be a positive value"],
    max: [10000, "Price must be less than or equal to 10,000"],
    // validate: {
    //   validator: function(value) {
    //     return /^\d+(\.\d{1,2})?$/.test(value); // Only allow prices with up to 2 decimal places
    //   },
    //   message: props => `${props.value} is not a valid price. Price must have up to 2 decimal places.`
    // }
  }
});

module.exports = mongoose.model("gems", gemsSchema);
