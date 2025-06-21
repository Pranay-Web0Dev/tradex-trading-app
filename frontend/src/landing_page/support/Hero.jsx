import React from 'react'

const Hero = () => {
  return (
    <div className='container w-full  bg-[#376dc4ee] text-white pb-20'>
      <div className="header w-[70vw] mx-auto flex justify-between items-center py-10 text-lg font-semibold ">
        <h1>Support Portal</h1>
        <h1>Track Tickets</h1>
      </div>
      <div className="content w-[70vw] mx-auto flex gap-20 items-center">
        <div className="left w-[35vw] ">
          <h1 className='text-xl font-semibold pb-5'>Search for an answer or browse help topics to create a Ticket</h1>
          <input type="text" className='bg-white text-gray-800 w-full rounded-sm py-5 px-5' placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." />

          <div className="links flex flex-wrap">
          <a className='text-md  pr-3 underline' href="/">Track account opening</a>
          <a className='text-md  pr-3 underline' href="/">Track segment activation</a>
          <a className='text-md  pr-3 underline' href="/">Intraday margins</a>
          <a className='text-md  pr-3 underline' href="/">Kite User manual</a>
          </div>

        </div>
        <div className="right">
          <h1 className=' font-semibold pb-3 text-2xl' >Featured</h1>
          <ol className='pl-6  text-lg '>
            <li className='pb-5'>1. <a className='underline' href="/">Surveillance measure on scrips - June 2025</a></li>
            <li>2. <a className='underline' href="/">Rights Entitlements listing in June 2025</a></li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Hero
