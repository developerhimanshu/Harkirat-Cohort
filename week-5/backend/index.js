const express = require('express');
const Todo = require('./db');
const {createTodo, updateTodo} = require('./types');
const cors = require('cors');
const app = express();

require('dotenv').config()
app.use(express.json());
app.use(cors())

const port = 3000;

app.post('/todo', async(req,res)=>{
 const createPayload = req.body;
 const parsedPayload = createTodo.safeParse(createPayload);
 if(!parsedPayload.success){
   res.status(411).json({
      msg: "You sent the wrong inputs",
   })
   return;
 }
 const newTodo = await Todo.create({
   title: createPayload.title,
   description: createPayload.description,
   isCompleted: false,
 })
 res.status(200).json({
   msg: "Todo created"
 })
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

app.put("/completed", async(req, res)=>{
   const updatePayload = req.body;
   const parsedPayload = updateTodo.safeParse(updatePayload);
   if(!parsedPayload.success){
      res.status(411).json({
         msg: "You sent the wrong inputs",
      })
      return;
   }
   await Todo.updateOne({_id:updatePayload.id}, {isCompleted:true})
   res.status(200).json({
      msg: "Todo completed"
   }) 
})

app.listen(port, ()=>{
   console.log(process.env.MONGO_URI);
    console.log("Listening on port " + port);
})