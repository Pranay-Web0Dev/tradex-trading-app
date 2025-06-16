import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto text-center flex justify-center items-center flex-col ">
      <img className='w-4/5' src="/images/homeHero.png" alt="" />
      <div className="signup-section mt-5">
        <h2 className="text-3xl font-semibold">Invest in Everything</h2>
        <p className='text-lg my-2'>Online platform to invest in stocks, mutual funds, and more</p>

        <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Signup Now</button>
      </div>
    </div>
  )
}

export default Hero
