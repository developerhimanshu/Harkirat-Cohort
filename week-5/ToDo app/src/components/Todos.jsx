import React from 'react'

const Todos = ({todos}) => {

  return (
    <div>
        {
            todos.map((todo)=>{
                return (
                    <div key={todo._id}>
                        <h2>{todo.title}</h2>
                        <p>{todo.description}</p>
                        <button >{todo.completed==true?'Todo Completed':'Mark as completed'}</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Todos