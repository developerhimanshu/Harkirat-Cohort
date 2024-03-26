import React from 'react'

const colorObjects = {
    green: "green-500",
    yellow: "yellow-500",
    purple:"purple-500",
    orange: "orange-500",
    white:"white",
    black:"black",
    red: "red-500",
    blue:"blue-500",
}
const ColorBar = ({setCurrColor}) => {
    const buttonClass = "px-4 h-6 cursor-pointer rounded-lg text-white"
    
  return (
    <div className='flex gap-4 px-4 py-2  rounded-lg bg-gray-300 justify-center absolute bottom-0 w-full'>
        <div className={`bg-red-500 ${buttonClass}`}  onClick={()=>{setCurrColor(colorObjects.red)}}>Red</div>
        <div className={`bg-yellow-500 ${buttonClass}`} onClick={()=>{setCurrColor(colorObjects.yellow)}}>Yellow</div>
        <div className={`bg-green-500 ${buttonClass}`} onClick={()=>{setCurrColor(colorObjects.green)}}>Green</div>
        <div className={`bg-blue-500 ${buttonClass}`} onClick={()=>{setCurrColor(colorObjects.blue)}}>Blue</div>
        <div className={`bg-purple-500 ${buttonClass}`} onClick={()=>{setCurrColor(colorObjects.purple)}}>Purple</div>
        <div className={`bg-black ${buttonClass}`} onClick={()=>{setCurrColor(colorObjects.black)}}>Black</div>
        <div className={`bg-orange-500 ${buttonClass}`} onClick={()=>{setCurrColor(colorObjects.orange)}}>Orange</div>
        <div className={`bg-white ${buttonClass}`} onClick={()=>{setCurrColor(colorObjects.white)}}></div>
    </div>
  )
}

export default ColorBar