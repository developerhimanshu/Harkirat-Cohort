import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Assignment7 = ({setName}) => {
    const navigate = useNavigate()
    // const [curName, setCurName] = useState("")
    const handleClick = ()=>{
        
        navigate('/cards')
    }
  return (
    <div className='bg-background-img flex justify-center items-center h-[100vh]'>

        <div className='flex flex-col items-center bg-blue-700/70 gap-8 py-4 px-8 rounded-lg shadow-lg shadow-black'>
            <h1 className='text-4xl font-bold text-white'>Enter your name</h1>
            <input placeholder='Enter your name' className='px-2 w-[80%] py-1 rounded-lg shadow-gray-800 shadow-md outline-none' minLength={3}  onChange={(e)=>setName(e.target.value)}/>
            <button className='px-4 py-1 bg-blue-500 text-white text-sm rounded-lg' onClick={handleClick}>Done</button>
        </div>

    </div>
  )
}

export default Assignment7