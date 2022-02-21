import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({writer: String, title: String, contents: String,
 og: {title: String, description: String, image: String, url: String} });

export const Board = mongoose.model("Board", boardSchema);