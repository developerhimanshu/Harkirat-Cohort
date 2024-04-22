import { useState } from 'react'
import './App.css'
import { RecoilRoot, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {  filterSelector, filterAtom, todosAtom } from './store/atoms/todos'

function App() {


  return (
    <RecoilRoot>
    <div>
      <Todos/>      
    </div>
    </RecoilRoot>
  )
}

const Todos = () =>{
  return (
    <div>
        <AddTodos/>
        <FilterTodos/>
        <RenderTodos/>
    </div>
   
  )
}

const AddTodos = ()=>{
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useRecoilState(todosAtom)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setTodos([...todos, {title: title, description: description}])
  }
  return (
    <form onSubmit={handleSubmit} >
          <input type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)}/>
          <input type="text" placeholder='description' onChange={(e)=>setDescription(e.target.value)}/>
          <input type="submit" value="Add" />
    </form>
  )
}

const FilterTodos = ()=>{
  const setFilter = useSetRecoilState(filterAtom);
  return(
    <input type="text" placeholder='search for filter' onChange={(e)=>setFilter(e.target.value)}/>
  )
}

const RenderTodos = ()=>{
  const filteredTodos = useRecoilValue(filterSelector)
  const ntodos = filteredTodos
  return (
    <div>
      {
        ntodos.map((todo, index)=>{
          return (
            <>            
            <div key={index}>{todo.title}</div>
            <div>{todo.description}</div>
            </>
          )
        })
      }
    </div>
  )
}

const Count = ()=>{

  return <div>
    <CountRerender/>
    <Buttons />
    <CountEvenRenderer/>
  </div>
}
const CountEvenRenderer = () => {
  const isEven = useRecoilValue(evenSelector);

  let evenHtml = null; // Initialize to null

  if (isEven) {
    evenHtml = <div>It is even</div>; // Assign JSX element
  }

  return evenHtml; // Return JSX element or null
}

const Buttons = ()=>{
  // const [Count, setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count=>count+1)}>Increment</button>
      <button onClick={() => setCount(count=>count - 1)}>Decrement</button>
    </div>
  )
}

const CountRerender = () => {
  let count = useRecoilValue(countAtom);
  return <div>
    <b>
    {count}
    </b>
  </div>
}
export default App
