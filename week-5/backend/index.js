const express = require('express');
const Todo = require('./db');

const app = express();

require('dotenv').config()
app.use(express.json());

const port = 3000;

app.post('/todo', async(req,res)=>{
 const {todo, description, isCompleted} = req.body;
 try{
    const newTodo = await Todo.create({todo:todo, description: description, isCompleted:isCompleted });
    res.status(200).json(newTodo)
 }catch(err){
   console.log(err);
    res.status(500).send(err);
 }
})

app.get("/todos", async(req, res)=>{
   try{
      const todos = await Todo.find();
      res.status(200).json(todos);
   }catch(err){
      console.log(err);
      res.status(500).send(err);
   }
})

app.put("/completed", (req, res)=>{

})

app.listen(port, ()=>{
   console.log(process.env.MONGO_URI);
    console.log("Listening on port " + port);
})