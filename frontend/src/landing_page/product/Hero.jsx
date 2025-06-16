import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  return (
    <div className='container flex flex-col justify-center items-center h-[30vh]'>
      <h1 className='text-3xl font-semibold'>Technology</h1>
      <h3 className='text-xl py-4'>Sleek, modern and intutive trading platforms</h3>
      <p>Checkout our <a href="/" className='text-blue-500 font-semibold'>Investing offerings <ArrowForwardIcon/></a></p>
      
    </div>
  )
}

export default Hero
