import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-8 py-[12px] border-b-solid border-b-[1px] border-b-[gray-400]] items-center'>
        <div className='flex'>
            <h1>Payouts</h1>
            <h1>?</h1>
            <h1>How it works</h1>
        </div>
        <div>
            <input type="text"  placeholder='Search features, tutorials, etc.' className='border-none outline-none bg-gray-200 rounded py-2 px-4 w-[30vw]'/>
        </div>
        <div className='flex'>
            <p>i1</p>
            <p>i2</p>
        </div>
    </div>
  )
}

export default Header