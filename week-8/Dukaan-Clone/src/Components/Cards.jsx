import React from 'react'
import RevenueCard from './RevenueCard'

const Cards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[20px]">
      
      <RevenueCard 
      title={"Next Payout"}
      amount={2312.23}
      orderCount={23}
      main={true}
      />
      <RevenueCard 
      title={"Amount Pending"}
      amount={92312.20}
      orderCount={13}
      main={false}
      />
      <RevenueCard 
      title={"Amount Processed"}
      amount={2392312.19}
      orderCount={0}
      main={false}
      />
    </div>
  )
}

export default Cards