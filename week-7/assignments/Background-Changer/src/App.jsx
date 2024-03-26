import { useState } from "react"
import ColorBar from "./Components/ColorBar"

function App() {
  const [currColor, setCurrColor] = useState("black");
  console.log(currColor);
  return (
    <div className={`bg-${currColor} h-[100vh]`}>
        <ColorBar setCurrColor={setCurrColor}/>
    </div>
  )
}

export default App
