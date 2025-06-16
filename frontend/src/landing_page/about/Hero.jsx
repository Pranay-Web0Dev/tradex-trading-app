import React from 'react'

const Hero = () => {
  return (

    <div className="container flex flex-col justify-center items-center">
      <h1 className='text-3xl font-semibold  py-[10vh]'>We pioneered the discount broking model in India. <br /> Now, we are breaking ground with our technology.</h1>

      <div className="para flex justify-center w-full">

        <p className='left mr-12 w-[30vw]'>We launched TradeX with a mission to eliminate all the barriers faced by Indian traders and investors — from high brokerage fees to lack of proper support and technology. <br /> <br /> Our goal was clear: build a seamless, affordable, and intuitive trading experience for everyone. <br /> <br />The name TradeX represents “Trade with Experience and Excellence” — a reflection of our commitment to innovation and simplicity.
          Today, our disruptive pricing model and powerful in-house technology have made TradeX one of the fastest-growing stock trading platforms in the country.</p>
       
        <p className="right ml-10 w-[30vw]">
          More than 1 crore users place millions of orders daily on TradeX through our robust ecosystem of investment tools — contributing a significant share to India’s retail trading activity.  <br /> <br />
          We also run several open, educational, and community-driven initiatives to empower every retail trader. <br /> <br /> Our fintech incubator supports startups that aim to improve and expand access to capital markets.
          And we’re just getting started.
          Stay updated through our blog or see what the world is saying about TradeX.
        </p>
      </div>

    </div>
  )
}

export default Hero
