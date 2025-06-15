import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Eduction = () => {
  return (
    <div className='container mt-32 flex justify-center items-center mb-20'>

      <div className="flex justify-around   w-10/12">

        <div className="w-5/12 ">
          <img src="images\education.svg" alt="" />
        </div>

        <div className="w-5/12 flex flex-col justify-start mt-7">
          <h2 className='text-2xl mb-2 font-semibold'>Free and open market Education</h2>

          <div className="info1 my-3">
          <p className='text-md my-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a className='text-blue-500' href="/">Versity <ArrowForwardIcon/></a>
          </div>

          <div className="info2 my-3">
          <p className='text-md my-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a className='text-blue-500' href="/">TradingQ&A <ArrowForwardIcon/></a>
          </div>
         
        </div>


      </div>

    </div>
  )
}

export default Eduction
