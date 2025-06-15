import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Pricing = () => {
  return (
    <div className='container mt-32 mx-auto flex justify-start items-center w-10/12 '>
      <div className="left-section w-5/12 pl-16 ">
        <h1 className='text-2xl font-semibold mb-8'>Unbeatable Pricing</h1>
        <p className='mb-2.5'>we pioneered the concept of discount broking and price transperency in India. Flat fees and no hidden charges.</p>
        <a className='text-blue-500' href="/">See Pricing <ArrowForwardIcon/></a>
      </div>

      <div className="w-5/12 right-section ml-20 flex  justify-end text-center">
        <span className="zero border border-gray-300 w-[45%]">
          <h2 className='text-3xl font-semibold py-5'>₹0</h2>
          <p className='pb-5'>Free Equity delivery and <br /> direct mutual funds</p>
        </span>

        <span className="twenty border border-gray-300 w-[45%]">
          <h2 className='text-3xl font-semibold py-5'>₹20</h2>
          <p className='pb-5'>Intraday and F&O</p>
        </span>
      </div>
    </div>
  )
}

export default Pricing
