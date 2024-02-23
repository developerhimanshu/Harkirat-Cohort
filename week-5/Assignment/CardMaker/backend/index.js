const express = require('express');
const app = express();
const cors = require('cors');
const Card = require('./db');
const { createCard } = require('./types');
require('dotenv').config()

app.use(express.json());
app.use(cors());


app.get('/cards', async(req, res)=>{
    const cards = await Card.find();
    res.status(200).json(cards);
})


app.post('/card', async(req, res)=>{
    const cardPayload = req.body
    const cardCheck = createCard.safeParse(cardPayload);

    if(!cardCheck.success ){
        return res.status(411).json({msg:'Wrong inputs received'})
    }
    const response = await Card.create(cardPayload)
    res.status(200).json(response);
    
})
app.listen(3000, ()=>{
    console.log("Server is up and running");
})