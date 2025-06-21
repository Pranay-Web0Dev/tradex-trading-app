import React from 'react'

const Universe = () => {
  return (
    <div className='container text-center'>
      <h1 className='text-3xl font-semibold'>The TradeX Universe</h1>
      <p className='py-7 text-gray-700'>Extend your trading and investment experience even further with our  partner platforms </p>
      <div className="upper-logo flex justify-evenly items-center mb-5">
        <div >
          <img className='w-40' src="images/smallcaseLogo.png" alt="" />
          <p className='text-[10px] py-2 text-gray-500'>Thematic investment platform</p>
        </div>
        <div>
          <img className='w-40' src="images/streakLogo.png" alt="" />
          <p className='text-[10px] py-2 text-gray-500'>Algo and Strategy platform</p>
        </div>
        <div>
          <img className='w-40' src="images/sensibullLogo.svg" alt="" />
          <p className='text-[10px] py-2 text-gray-500'>Options Trading platform</p>
        </div>
      </div>
      <div className="lower-logo flex justify-evenly items-center">
        <div>
          <img className='w-40' src="images/zerodhaFundhouse.png" alt="" />
          <p className='text-[10px] py-2 text-gray-500'>Asset management</p>
        </div>
        <div>
          <img className='w-40' src="images/goldenpiLogo.png" alt="" />
          <p className='text-[10px] py-2 text-gray-500'>Bonds trading platform</p>
        </div>
        <div>
          <img className='w-40' src="images/dittoLogo.png" alt="" />
          <p className='text-[10px] py-2 text-gray-500'>insurance</p>
        </div>
      </div>
      <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-9 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Signup Now</button>

    </div>
  )
}

export default Universe
