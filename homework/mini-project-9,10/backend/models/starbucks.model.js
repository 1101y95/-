import mongoose from "mongoose";

const starbucksSchema = new mongoose.Schema({
    _id : String,
    name: String,
    img: String
})

export const StarBucks = mongoose.model("StarBucks", starbucksSchema);