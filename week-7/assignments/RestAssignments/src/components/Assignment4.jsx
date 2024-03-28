import React, { useState } from 'react'

const Assignment4 = () => {
    const [words, setWords] = useState(0);
    const [text, setText] = useState("");
    const para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ad delectus, harum vero quibusdam inventore unde, molestias illo quas ipsum quaerat deleniti soluta nisi! Delectus vitae ea praesentium odio quae quod quis architecto dicta iusto, voluptatum nostrum quas fugit exercitationem beatae eaque repudiandae itaque iste consequatur. Cum quisquam hic iste at? Distinctio voluptatibus placeat nihil repellat ut earum necessitatibus quas eaque debitis excepturi dolorem veritatis minima id quos voluptates voluptatem cumque ad, fugit saepe aspernatur! Modi repellat quos repudiandae, illo neque maxime hic quibusdam consequatur! Sed vero at debitis similique, natus voluptate animi accusantium quam harum esse adipisci perspiciatis corrupti!";

    const wordsArr = para.split(' ');
    const handleSubmit=()=>{
        let currwords = "";
        
        for(let i=0; i<words; i++){
    
            const word = wordsArr[Math.floor(Math.random()*10)];
            console.log(
                word
            );
            currwords+=word;
            currwords+=" ";
        }
        console.log(currwords);
        setText(currwords)
    }
  return (
    <div className='flex flex-col items-center gap-4 my-10'>
        <h1 className='text-3xl font-bold'>Para Generator</h1>
        <div className='flex gap-5'> 
            <input  placeholder='Enter the number of words' onChange={(e)=>{
                setWords(parseInt(e.target.value));
            }} className='py-2 px-1 outline-none border-solid border-[2px] border-black w-[50vw]'/>
            <button className='text-white py-2 px-4 bg-gray-600 rounded-lg' onClick={handleSubmit}>Generate</button>
        </div>
        {text.length>0?<p className='border-solid border-[2px] border-black px-2 py-4'>{text}</p>:""}
    </div>
  )
}

export default Assignment4