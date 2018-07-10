const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beerSchema = new Schema({
    yeast: [{ type: String, required: true }],
    baseMalt: [{ type: String, required: true }],
    specialtyGrains: [{ type: String, required: true }],
    adjuncts: [{ type: String, required: true }],
    hops: [{ type: String, required: true }],
    bitter: [{ type: String, required: true }],
    addons: [{ type: String, required: true }],
    beerName: String,
    date: { type: Date, default: Date.now },
    creator: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;

