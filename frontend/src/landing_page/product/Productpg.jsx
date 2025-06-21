import React from 'react'
import Hero from './Hero'
import Universe from './Universe'
import LeftImage from './leftImage'
import RightImage from './RightImage'

const Productpg = () => {
  return (
    <div>
      <Hero />
      <div className="breakpoint sticky  p-0 w-[100%] bg-gray-200 h-0.5 my-20 mt-5"></div>

       <LeftImage
        imageUrl="images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading  with streaming  market data, advanced charts, and elegant UI, and more. Enjoy the kite experience seamlessly  on your  Android and IOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore="" />
      <div className="breakpoint sticky  p-0 w-[100%] bg-gray-200 h-0.5 my-20"></div>

       <RightImage   imageUrl="images/kiteconnect.png"
        productName="Kite connect Api"
        productDescription="Buy direct mutual funds online, commission free, delivered  directly to  your  Demat  account. Enjoy the investment experience on your Android and IOS devices"
        learnMore="" />
      <div className="breakpoint sticky  p-0 w-[100%] bg-gray-200 h-0.5 my-20"></div>

      <LeftImage
        imageUrl="images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission free, delivered  directly to  your  Demat  account. Enjoy the investment experience on your Android and IOS devices"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore="" />

      <div className="breakpoint sticky  p-0 w-[100%] bg-gray-200 h-0.5 my-20"></div>

      <RightImage  imageUrl="images/console.png"
        productName="Console"
        productDescription="Buy direct mutual funds online, commission free, delivered  directly to  your  Demat  account. Enjoy the investment experience on your Android and IOS devices"
        learnMore="" />
      <div className="breakpoint sticky  p-0 w-[100%] bg-gray-200 h-0.5 my-20"></div>

       <LeftImage
        imageUrl="images/varsity.png"
        productName="Varsity"
        productDescription="Buy direct mutual funds online, commission free, delivered  directly to  your  Demat  account. Enjoy the investment experience on your Android and IOS devices"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore="" />

        <p className='text-center'>Want to know more about our Technology stack? Check out  the TradeX.tech blog.</p>
      <div className="breakpoint sticky  p-0 w-[100%] bg-gray-200 h-0.5 my-20"></div>
      <Universe />
    </div>
  )
}

export default Productpg
