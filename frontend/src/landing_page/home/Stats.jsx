import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Stats = () => {
  return (
    <div className='container  mx-auto flex justify-start items-center w-10/12' >

      <div className="left-section w-5/12 pl-16 ">

        <h1 className='text-3xl font-semibold mb-7'>Trust With Confidence</h1>

        <h3 className='text-xl font-semibold'>Customer-first always</h3>
        <p className='text-gray-600 mb-4'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.</p>

        <h3 className='text-xl font-semibold'>No spam or gimmicks</h3>
        <p className='text-gray-600 mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

        <h3 className='text-xl font-semibold'>The TradeX universe</h3>
        <p className='text-gray-600 mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>


        <h3 className='text-xl font-semibold'>Do better with money</h3>
        <p className='text-gray-600 mb-4'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

      </div>

      <div className="right-section w-4/12 ml-40 text-center">
          <img src="images\ecosystem.png" alt="" />
          <a className='text-blue-500' href="/">Explore our products <ArrowForwardIcon/></a>
      </div>

    </div>
  )
}

export default Stats
