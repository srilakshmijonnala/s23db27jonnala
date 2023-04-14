const mongoose = require("mongoose")
const gemsSchema = mongoose.Schema({
gems_color: String,
gems_breed: String,
gems_price: Number
})
module.exports = mongoose.model("gems",gemsSchema)