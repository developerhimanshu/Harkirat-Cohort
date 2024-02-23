import axios from "axios";
import React, { useState } from "react"


const CreateCards = () => {
  let interestInputs= [
    {
        type:'text', 
        placeholder:'Interest',
        value:""
    }
  ]

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [socialMedia, setSocialMedia] = useState({
    linkedIn: "",
    twitter: "",
  });
  const [interestVar, setInterestsVar] = useState("");
  const [interest, setInterests] = useState<string[]>([])
  let [arr, setArr] = useState(interestInputs);


  let interestsArr:string[]
  const handleNameChange = (e:any) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e:any) => {
    setDescription(e.target.value);
  };
  const handleLinkedInChange = (e:any) => {
    setSocialMedia({...socialMedia, linkedIn: e.target.value });
  };
  const handleTwitterChange = (e:any) => {
    setSocialMedia({...socialMedia, twitter: e.target.value });
  };
 
  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterestsVar(interestVar+e.target.value);
  };
 
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      const temp = interest;
      temp.push(interestVar);
      setInterests(temp)
      console.log(interest);
      
      setInterestsVar("")
      const response = axios.post("http://localhost:3000/card", {
        name: name,
        description: description,
        socialMedia: socialMedia,
        interests: interest,
      })
      setName("");
      setDescription("");
      setSocialMedia({
        linkedIn: "",
        twitter: "",
      });
      setInterests([]);
      console.log(response);
    }
   
 
  let addArrayInput = ()=>{
    console.log(interestVar);
    const temp = interest;
    temp.push(interestVar);
    setInterests(temp)
    setArr([...arr, {
        type:'text',
        placeholder:'Interest',
        value:""
    }
])
  }
  let removeArrayInput = ()=>{
     setArr(s=>{
        return s.slice(0,s.length-1)
     })
  }
  return (
    <div className="w-[50vw] bg-gray-500 px-[40px] flex flex-col gap-2 items-center py-2 rounded-lg">

        <p className="text-2xl text-white">Create your Identity Card</p>
        <form onSubmit={handleSubmit}>
          
        <div>
        <p className="text-white">Enter your name:</p>
        <input type="text" placeholder="Name" className="px-2 py-1 outline-none text-lg w-[240px] rounded-lg" onChange={handleNameChange}/>
        </div>
        <div>
        <p className="text-white">Enter your description:</p>
        <input type="text" placeholder="Description" className="px-2 py-1 outline-none text-lg w-[240px] rounded-lg" onChange={handleDescriptionChange}/>
        </div>
        <div className="flex flex-col gap-1">
        <p className="text-white">Enter your social media links:</p>
        <input type="text" placeholder="LinkedIn" className="px-2 w-[240px] py-[1px] outline-none text-lg rounded-lg" onChange={handleLinkedInChange}/>
        <input type="text" placeholder="Twitter" className="px-2 py-[1px] outline-none text-lg rounded-lg" onChange={handleTwitterChange}/>      
        </div>
        <div>
        <p className="text-white">Enter your interests:</p>
        <div className="flex flex-col items-center gap-1">
            {
                arr.map((item, i)=>{
                    return(
                        <input type={item.type} placeholder={`${item.placeholder} ${i+1}`} onChange={handleInterestChange} className="px-2 py-[1px] outline-none   text-lg w-[240px] rounded-lg"/>
                    )
                })
            }
            <div className="flex gap-2">
                {arr.length >=3?"":  <button type="button" onClick={addArrayInput} className="text-white bg-zinc-900 rounded-lg text-[25px] px-2  text-center">+</button>}
          {arr.length<=1?"": <button type="button" onClick={removeArrayInput} className="text-white bg-zinc-900 rounded-lg text-[25px] px-2  text-center">-</button>}
      
            </div>
       
        </div>
        </div>
     
        <button type="submit" className="text-white bg-zinc-900 w-[100px] rounded-lg py-1 text-lg">Create</button>
        </form>

    </div>

  )
}

export default CreateCards