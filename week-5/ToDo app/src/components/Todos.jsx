import axios from 'axios'
import React, { useState } from 'react'

const Todos = ({todos, setTodos}) => {
    
    const handleClick = async(id) => {
        await axios.put("http://localhost:3000/completed", {id:id})
        const updatedTodos = todos.map(todo =>{
            if(todo._id === id){
                return {
                    ...todo, isCompleted:true
                }
            }
            return todo;
        })
        setTodos(updatedTodos)
    }
  return (
    <div>
        {
            todos.map((todo)=>{
                return (
                    <div key={todo._id}>
                        <h2>{todo.title}</h2>
                        <p>{todo.description}</p>
                        <button onClick={()=>handleClick(todo._id)} >{todo.isCompleted==true?'Todo Completed':'Mark as completed'}</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Todos