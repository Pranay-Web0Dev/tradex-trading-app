import React from 'react'

const Hero = () => {
  return (
    <div className='container flex flex-col justify-center items-center  '>

      <div className="heading flex flex-col justify-center items-center h-[30vh]">
      <h1 className='text-3xl font-semibold'>Pricing</h1>
      <h3 className='text-xl py-4'>Free equity investment and flat ₹20 traday and F&O trades</h3>
      </div>
      <div className="breakpoint sticky  p-0 w-[100%] bg-gray-200 h-0.5 my-20 mt-5"></div>

      <div className="pricing-section flex justify-evenly text-center items-center w-full">
        <div>
          <img className='w-[20vw]' src="images/pricingEquity.svg" alt="" />
          <h1 className='text-3xl font-semibold'>Free equity delivery</h1>
          <p className='text-[14px] py-2 text-gray-500'>All equity delivery investments (NSE, BSE),<br />are absolutely free — ₹0 brokerage.</p>

        </div>
        <div>
          <img className='w-[20vw]' src="images/intradayTrades.svg" alt="" />
          <h1 className='text-3xl font-semibold'>Intraday and F&O trades</h1>
          <p className='text-[14px] py-2 text-gray-500'>Flat Rs. 20 or 0.03% (whichever is lower) <br /> per executed order on intraday trades<br /> across equity, currency, and commodity trades.</p>
        </div>
        <div>
          <img className='w-[20vw]' src="images/pricingEquity.svg" alt="" />
          <h1 className='text-3xl font-semibold'>Free direct MF</h1>
          <p className='text-[14px] py-2 text-gray-500'>All direct mutual fund investments are <br /> absolutely free — ₹0 commission.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
