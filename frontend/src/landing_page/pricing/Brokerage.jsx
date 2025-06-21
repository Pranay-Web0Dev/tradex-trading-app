import React from 'react'

const Brokerage = () => {
  return (
    <div className='container flex justify-center items-center gap-32 mb-20' >
      <div className="left ">
        <h1 className='pb-3.5 text-center mr-32 text-2xl text-blue-500 font-semibold'>Brokerage calculator</h1>
        <ul className='list-disc text-gray-600'>
          <li className='py-2'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
          <li className='py-2'>Digital contract notes will be sent via e-mail.</li>
          <li className='py-2'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
          <li className='py-2'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
          <li className='py-2'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
          <li className='py-2'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
        </ul>
      </div>
      <div className="right self-start">
        <h1 className='text-center mr-32 text-2xl text-blue-500 font-semibold'>List of charges</h1>
      </div>
    </div>
  )
}

export default Brokerage
