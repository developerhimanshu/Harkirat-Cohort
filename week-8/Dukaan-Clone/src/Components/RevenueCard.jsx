import React from 'react'

const RevenueCard = ({title, orderCount, amount, main}) => {
  const mainClass = "bg-[#146EB4] hover:bg-[#0e4f82] text-white"
  const normalCalss = "bg-white"
  return (
    <div className={`${main?mainClass:normalCalss} rounded shadow-md`}>
        <div className='px-4 py-2'>
          <div>
              {title}
              ?
          </div>
          <div className='flex justify-between'>
              <div>
              ₹ {amount}
              </div>
              {orderCount?<div>
                23 Orders{'>'}
              </div>:<></>}
          </div>
        </div>
        {main?<div className='bg-[#0e4f82] rounded px-4 py-2'>
          Next Payment Date: Today, 4:00PM
        </div>:<></>}
        
    </div>
  )
}

export default RevenueCard