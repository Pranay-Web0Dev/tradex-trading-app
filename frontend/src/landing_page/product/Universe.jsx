import React from 'react'

const Universe = () => {
  return (
    <div className='container text-center'>
      <h1>The TradeX Universe</h1>
      <p>Extend your trading and investment experience even further with our  partner platforms </p>
      <div className="upper-logo flex justify-evenly items-center">
        <div>
        <img className='w-40' src="images/smallcaseLogo.png" alt="" />
        <p>Thematic investment platform</p>
        </div>
        <div>
        <img className='w-40' src="images/streakLogo.png" alt="" />
        <p>Algo and Strategy platform</p>
        </div>
        <div>
        <img className='w-40' src="images/sensibullLogo.svg" alt="" />
        <p>Thematic investment platform</p>
        </div>
      </div>
    </div>
  )
}

export default Universe
