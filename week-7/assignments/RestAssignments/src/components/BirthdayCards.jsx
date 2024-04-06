import React, { useContext, useState } from 'react'
import { NameContext } from './context'


const BirthdayCards = () => {

    const birthdays = [{msg:"Happy Birthday!", msg1:"May this birthday brings prosperity in your life.", background:"birthday-1"}, {msg:"Happy Birthday!", msg1:"May this birthday brings prosperity in your life.", background:"birthday-2"}, {msg:"Happy Birthday!", msg1:"May this birthday brings prosperity in your life.", background:"birthday-3"}]

   const name = useContext(NameContext);
   console.log(name);
  return (
    <div className='bg-background-img flex justify-center items-center h-[100vh] gap-20'>
        {birthdays.map(birthday =>{
            return (
                <Card name={name} msg={birthday.msg} msg2={birthday.msg1} background={birthday.background}/>
            )
        })}
      
    </div>
  )
}

const Card = ({name, msg, msg2, background})=>{
    return (
        <div className={`flex flex-col items-center gap-4 bg-gray-500 py-4 px-2 rounded-xl shadow-lg bg-cover max-w-[300px]`}>

            <p className="text-xl text-black font-bold text-center ">{name}</p>
            <p className={`text-white text-xl  h-[10vh ] text-center`}>{msg}</p>
            <p className={`text-white text-lg  h-[10vh ] text-center`}>{msg2}</p>
        </div>
    )
}

export default BirthdayCards