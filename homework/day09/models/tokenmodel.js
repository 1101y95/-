import { ObjectId } from 'mongodb';
import mongoose from 'mongoose'

const mongSchema = new mongoose.Schema({
    // _id: ObjectId(""),
    token:String,
    phone:String,
    isAuth: Boolean,
    // __v: Number
});

export const MongS = mongoose.model('MongS', mongSchema)