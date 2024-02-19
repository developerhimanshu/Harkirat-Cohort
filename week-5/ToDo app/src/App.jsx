import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

// const todos = []
 function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try{
      const res = await axios.get('http://localhost:3000/todos');
      setTodos(res.data);
      console.log(todos);
      setLoading(false);
      }catch(err){
        console.log(err);
        setTodos([]);
      }
    }
    fetchData();
  }, []);
  
  if(loading){
    return <div>Loading...</div>
  }
  return (
   <div>
      <CreateTodo/>
      <Todos todos={todos}/>
   </div>
  )
}

export default App
