const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI)
const cardSchema = mongoose.Schema({
    name:String,
    description:String,
    socialMedia:{linkedIn:String, twitter:String},
    interests:[String],
})

const Card = mongoose.model('cards', cardSchema);
module.exports = Card