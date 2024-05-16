import React from 'react'

const Sidebar = () => {
    const payout = true;
    const itemsClass = 'hover:bg-slate-700 flex gap-2 rounded px-1 py-2 w-[180px] text-[14px] hover:cursor-pointer '
  return (
    <div className='bg-[#1e2640] h-[100vh] w-[15vw] flex flex-col items-center text-white justify-between py-4'>
    <div>
        <div className='flex'>
            <img src="" alt="ic"/>
            <div>
                <h1>Nishyan</h1>
                <p className='font-extralight underline text-sm'>Visit Store</p>
            </div>
            <p className=''>_</p>
        </div>
        <div className='flex flex-col'>
            <div className={itemsClass}>Home</div>
            <div className={itemsClass}>Orders</div>
            <div className={itemsClass}>Products</div>
            <div className={itemsClass}>Delivery</div>
            <div className={itemsClass}>Marketing</div>
            <div className={itemsClass}>Analytics</div>
            <div className={`${itemsClass} ${payout?'bg-slate-700':""}`}>Payouts</div>
            <div className={itemsClass}>Discounts</div>
            <div className={itemsClass}>Audience</div>
            <div className={itemsClass}>Appearence</div>
            <div className={itemsClass}>Plugins</div>
        </div>
    </div>
        <div className='flex rounded bg-slate-700 px-2 py-1 w-[150px]'>
            <p>I</p>
            <div>
                <p className='text-[13px]'>Available Credits</p>
                <h1 className='font-bold'>224.10</h1>
            </div>
        </div>
    </div>
  )
}

export default Sidebar