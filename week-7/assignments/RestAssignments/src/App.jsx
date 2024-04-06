import Assignment4 from "./components/Assignment4"
import Assignment5 from "./components/Assignment5"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import OTP from "./components/OTP"
import Assignment7 from "./components/Assignment7"
import BirthdayCards from "./components/BirthdayCards"
import { NameContext } from "./components/context"
import { useState } from "react"

function App() {
  const [name, setName] = useState("");
  // console.log(name);
  return (
    <NameContext.Provider value={name}>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Assignment7 setName={setName}/>}/>
          <Route path="/cards" element={<BirthdayCards/>}/>
          <Route path="/otp" element={<OTP/>}/>
      </Routes>
    
    </BrowserRouter>
        </NameContext.Provider>
  )
}

export default App
