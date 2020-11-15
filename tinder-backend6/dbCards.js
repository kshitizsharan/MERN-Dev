import mongoose from 'mongoose'
import pkg from 'mongoose';
const {mongo} = pkg;

const cardSchema=mongoose.Schema({
    name: String,
    imgUrl: String
})

export default mongoose.model("cards",cardSchema)