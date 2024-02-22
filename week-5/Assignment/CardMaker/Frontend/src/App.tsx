import Cards from "./components/Cards"
import CreateCards from "./components/CreateCards"

function App() {


  return (
    <div className="flex flex-col items-center">
      <CreateCards/>
      <Cards/>
    </div>
  )
}

export default App
