import React from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';


const Holdings = () => {
  return (
     <div className='container h-[37vh] border-b-2 border-gray-200 '>
      <div className="upper flex py-10 gap-2.5">
        <CreditCardIcon/>
        <h1>Holdings (13)</h1>
      </div>
      <div className="lower flex justify-between px-16 w-[34vw]">

        <div className="left">
          <h1 className='text-4xl text-green-500'>1.55k <span className='text-sm'>+5.20%</span></h1>
          <p className='text-sm text-gray-500'>P&L</p>
        </div>
        <div className="right text-gray-500 pt-1.5 ">
          <p>current value 31.43k</p>
          <p>investment 29.88k</p>
        </div>
      </div>
    </div>
  )
}

export default Holdings
