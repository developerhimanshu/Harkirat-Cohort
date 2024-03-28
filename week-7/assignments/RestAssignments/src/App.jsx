import Assignment4 from "./components/Assignment4"
import Assignment5 from "./components/Assignment5"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import OTP from "./components/OTP"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Assignment5/>}/>
        <Route path="/otp" element={<OTP/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
