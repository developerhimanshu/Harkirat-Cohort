import React from 'react'
import { useNavigate } from 'react-router-dom'

const Assignment5 = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/otp")
  }
  return (
    <div className='flex flex-col items-center gap-4 border-solid border-[2px] border-black rounded-md mx-2 my-2 w-[20vw] py-4'>
        <h1 className='text-xl font-bold'>Login via OTP</h1>
        <div className='flex flex-col items-center gap-4'>
          <input type="text" placeholder='Enter your mobile number' className='outline-none border-solid border-[2px] border-black rounded-md px-2 py-1'/>
          <button onClick = {handleClick} className='px-4 py-2 bg-gray-700 text-white rounded-lg'>Send OTP</button>
        </div>
    </div>
  )
}

export default Assignment5