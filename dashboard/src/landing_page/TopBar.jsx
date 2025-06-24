import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Navbar from './Navbar';


const TopBar = () => {
  return (
    <div className='container h-20 flex w-[100vw] '>
      <div className="left flex justify-around items-center  w-[32vw] h-full border-2 border-gray-200">
        <div className="nifty">
          <span>NIFTY 50</span>
          <span className='px-4 text-red-600 font-semibold'>0.00</span>
          <span>0</span>
        </div>

        <div className="sensex">
          <span>SENSEX</span>
          <span className='px-4 text-red-600 font-semibold'>0.00</span>
          <span>0</span>
        </div>
      </div>

      <div className="right flex justify-between items-center w-[68vw] px-10 border-2 border-gray-200">

        <div className="logo">
          <img src="./images/navLogo.png" className='w-[2vw]' alt="" />
        </div>

        <div className="nav flex gap-4 ">
          <Navbar/>

          <div className="user flex gap-1.5 border-l-2 border-gray-200 pl-3">
              <AccountCircleIcon/>
              <h1>User </h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TopBar
