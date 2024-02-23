import axios from "axios";
import Card from "./Card"
import { useEffect, useState } from "react";
import { social } from "./Card";
interface cardType{
    id: string
    name: string
    description: string
    socialMedia:social
    interests:string[]
}

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect( ()=>{

    const getCards = ()=>{
    axios.get("http://localhost:3000/cards").then(
        (res)=>{
            console.log(res.data);
            setCards(res.data)
        }
    )
    }
    getCards()
    }, [])
  return (
    <div className="w-[100vw] p-4 lg:px-[150px] bg-black">
        <p className="text-white text-center text-[1.8rem] mb-4 font-semibold">Identity Cards we have</p>
        <div className="flex flex-wrap gap-[20px]">
        {cards.map((card:cardType)=>{
            return(
                <Card key={card.id} name={card.name} description={card.description} socialMedia={card.socialMedia} interests={card.interests}/>
            )
        })}
        </div>
    
    </div>
  )
}

export default Cards