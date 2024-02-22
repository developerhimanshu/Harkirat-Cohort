export interface social{
    linkedIn:string
    twitter:string
}
interface CardsProp {
    name:string
    description:string
    socialMedia:social
    interests:string[]
}

import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai"

const Card = ({name, description, socialMedia, interests}:CardsProp) => {
  return (
    <div className="flex flex-col bg-white w-[200px] py-4 px-2 rounded-xl ">
        <p className="font-semibold text-center">{name.toUpperCase()}</p>
        <p>{description}</p>
        <div className="flex gap-2 w-[100%]  justify-center"> 
            <a href={socialMedia.linkedIn} target="_blank">{<AiFillLinkedin size={30}/>}</a>
            <a href={socialMedia.twitter} target="_blank">{<AiFillTwitterSquare size={30}/>}</a>                      
        </div>
        <div>
            <p className="font-semibold">Interests:</p>
            <div className="mt-[-4px]">
            {interests.map(interest=>{
                return(
                    <p className="mt-[-2px]">{interest}</p>
                )
            })}
            </div>
           
        </div>

        
    </div>
  )
}

export default Card