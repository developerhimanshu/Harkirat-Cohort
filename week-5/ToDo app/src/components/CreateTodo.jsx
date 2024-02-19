import axios from 'axios';
import React, { useState } from 'react'

const addTodo = ()=>{
  const title = document.getElementById('title').ariaValueMax;
}

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");  

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      const response = await axios.post("http://localhost:3000/todo", {
        title:title,
        description:description

      });
      console.log(response.data);

      setTitle('');
      setDiscription('');
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        style={
            {padding:10, margin:10}
        }
        value={title} id="title" placeholder="title"
        onChange={(e)=>setTitle(e.target.value)}
        /><br/>
        <input  style={
            {padding:10, margin:10}
        } value={description} type='text' id="description" placeholder='description'
        onChange={(e)=>setDiscription(e.target.value)}
        /><br/>
        <button type="submit"  style={
            {padding:10, margin:10}
        }>Add a todo</button>
        </form>
    </div>
  )
}

export default CreateTodo