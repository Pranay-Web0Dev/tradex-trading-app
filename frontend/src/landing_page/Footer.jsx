import React from 'react'

const Footer = () => {
  return (
    <div className='container w-10/12'>
      <div className="upper-section">
        <div className="left ">
          <div className="logo flex gap-2 text-blue-500">
          <img src="images/trend.png" alt="tradex logo" className='w-[20px] ' />
          <span>TradeX</span>
          </div>
          <p> &copy; 2025 - 2050, TradeX Broking Ltd.</p>
          <p>All rights  reserved.</p>
        </div>
        <div className="right"></div>
      </div>
      
    </div>
  )
}

export default Footer
