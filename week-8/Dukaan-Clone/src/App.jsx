import Cards from "./Components/Cards"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"

function App() {
 
  return (
   <div className="flex w-[100vw]">
    <Sidebar/>
    <div className="w-full">
     <Header/>
      <div className="px-6">
        <div className="flex justify-between my-8">
          <p className="font-semibold text-2xl">Overview</p>
          <div className="border-solid border-[1px] border-gray-200 px-2 py-1">This month</div>
        </div>
        <Cards/>
        <div className="flex flex-col mt-6 gap-4">
          <h1 className="font-semibold text-2xl">Transactions | This Month</h1>
          <div className="flex gap-3">
            <div className="rounded-full py-1 px-3 text-gray-500 bg-gray-200 cursor-pointer">Payouts {'(22)'}</div>
            <div className="rounded-full py-1 px-3 text-white bg-sky-700 cursor-pointer">Refunds {'(6)'}</div>
          </div>
        </div>

        <div className="flex justify-between my-6">
          <div className="flex border-solid border-[1px] border-gray-300 rounded w-[20vw]">
            <p>I</p>
            <input type="text" className="border-none outline-none w-full" placeholder="Order ID or transactions ID"/>
          </div>
          <div className="flex">
            <div className="px-4 py-2 border-solid border-[1px] border-gray-300 rounded">Sort</div>
            <div className="px-4 py-2 border-solid border-[1px] border-gray-300 rounded">d|</div>
          </div>
        </div>

      </div>
     </div>
   </div>
  )
}

export default App
