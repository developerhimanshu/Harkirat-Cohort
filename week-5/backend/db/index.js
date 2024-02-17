const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI)

const TodoSchema = new mongoose.Schema({
    title:String,
    description:String,
    isCompleted:Boolean,
});

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;