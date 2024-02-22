import { useState } from "react"


const CreateCards = () => {

  let interestInputs= [
    {
        type:'text', 
        placeholder:'Interest',
        value:""
    }
  ]
  let [arr, setArr] = useState(interestInputs);
  let addArrayInput = ()=>{
     setArr(s=>{
        return [
            ...s,
            {
                type:'text',
                placeholder:'Interest',
                value:""
            }
        ]
     })
  }
  let removeArrayInput = ()=>{
     setArr(s=>{
        return s.slice(0,s.length-1)
     })
  }
  return (
    <div className="w-[50vw] bg-gray-500 px-[40px] flex flex-col gap-2 items-center py-2 rounded-lg">

        <p className="text-2xl text-white">Create your Identity Card</p>
    <form>
        <div>
        <p className="text-white">Enter your name:</p>
        <input type="text" placeholder="Name" className="px-2 py-1 outline-none text-lg w-[240px] rounded-lg"/>
        </div>
        <div>
        <p className="text-white">Enter your description:</p>
        <input type="text" placeholder="Description" className="px-2 py-1 outline-none text-lg w-[240px] rounded-lg"/>
        </div>
        <div className="flex flex-col gap-1">
        <p className="text-white">Enter your social media links:</p>
        <input type="text" placeholder="LinkedIn" className="px-2 w-[240px] py-[1px] outline-none text-lg rounded-lg"/>
        <input type="text" placeholder="Twitter" className="px-2 py-[1px] outline-none text-lg rounded-lg"/>
        <input type="text" placeholder="Discord" className="px-2 py-[1px] outline-none text-lg rounded-lg"/>
        
        </div>
        <div>
        <p className="text-white">Enter your interests:</p>
        <div className="flex flex-col items-center gap-1">
            {
                arr.map((item, i)=>{
                    return(
                        <input type={item.type} placeholder={`${item.placeholder} ${i+1}`} className="px-2 py-[1px] outline-none   text-lg w-[240px] rounded-lg"/>
                    )
                })
            }
            <div className="flex gap-2">
                {arr.length >=3?"":  <button onClick={addArrayInput} className="text-white bg-zinc-900 rounded-lg text-[25px] px-2  text-center">+</button>}
          {arr.length<=1?"": <button onClick={removeArrayInput} className="text-white bg-zinc-900 rounded-lg text-[25px] px-2  text-center">-</button>}
      
            </div>
       
        </div>
        </div>
     
        <button type="submit" className="text-white bg-zinc-900 w-[100px] rounded-lg py-1 text-lg">Create</button>
    </form>
    </div>

  )
}

export default CreateCards