import mongoose from "mongoose";

const coffeeSchema = new mongoose.Schema({
    img: String,
    name: String
})

export const Coffee = mongoose.model("Coffee", coffeeSchema);