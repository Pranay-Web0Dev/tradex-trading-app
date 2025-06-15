
import React from 'react'

const Awards = () => {
  return (
    <div className='container flex justify-center items-center mb-20'>

      <div className="flex justify-around  w-10/12">

        <div className="w-5/12">
          <img src="images\largestBroker.svg" alt="" />
        </div>

        <div className="w-5/12 flex flex-col justify-start">
          <h2 className='text-4xl mb-2 font-semibold'>Largest Stock broker in India</h2>
          <p className='text-lg my-2'>2+ million TradeX clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
          <div className="flex justify-start mt-2 mb-12">
            <div className=" mx-4">
              <ul className='list-disc mt-2.5'>
                <li className='mt-3'>Futures and Options</li>
                <li className='mt-3'>Commodity derivatives</li>
                <li className='mt-3'>Currency derivatives</li>
              </ul>
            </div>

            <div className="ml-28">
              <ul className='list-disc'>
                <li className='mt-3'>Stocks and IPOs</li>
                <li className='mt-3'>Direct mutual funds</li>
                <li className='mt-3'>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img className='mt-12' src="images\pressLogos.png" alt="" />
        </div>


      </div>

    </div>
  )
}

export default Awards
