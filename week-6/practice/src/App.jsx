import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  // console.log(TextComponent);
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
  window.setInterval(()=>{
    
      axios.get('https://sum-server.100xdevs.com/todos').then((response)=>{
        setTodos(response.data.todos)
      })
  }, 2000)
}, [])

  return <div>
    {todos.map((todo)=>{
      return(
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      )
    })}
  </div>
}

function TextComponent(){
  return <div>Hello World</div>
}

function CardWrapper({innerComponent}){
  return(
  <div style={{border:"2px solid black"}}>
    {innerComponent}
  </div>
  )
}

export default App