import React, { useEffect, useRef } from 'react'

const OTP = () => {
  const inputClass = "w-[30px] h-[30px] outline-none border-solid border-[2px] border-black rounded-lg text-center"
  const otpRefs = Array.from({length:4}, ()=>useRef(null))
  const handleInputChange = (index, e)=>{
    const input = e.target;
    if(input.value&&index<otpRefs.length-1){
      otpRefs[index+1].current.focus()
    }
  } 
  useEffect(()=>{
    otpRefs[0].current.focus()
  }, [])

  return (
    <div className='flex flex-col items-center gap-4 border-solid border-[2px] border-black rounded-md w-[20vw] mx-2 my-2 py-4'>
    <h1 className='text-xl font-bold'>Login via OTP</h1>
    <div className='flex flex-col items-center gap-4'>
    <div className='flex gap-4'>
      {
        [...Array(4)].map((_, index)=>{
          return(
            <input
              key={index}
              type="text"
              className={inputClass}
              maxLength={1}
              ref={otpRefs[index]}
              onChange={(e)=>handleInputChange(index, e)}
            />
          )
        })
      }       
    </div>
      <button className='px-4 py-2 bg-gray-700 text-white rounded-lg'>Login</button>
    </div>
</div>
  )
}

export default OTP