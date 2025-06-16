import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const LeftImage = ({imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) => {
  return (
    <div className='container flex justify-evenly items-center'>
      <div className="left">
        <img src={imageUrl} alt="" />
      </div>

      <div className="right w-[30%]">
        <h1 className='text-3xl font-semibold'>{productName}</h1>
        <p className='py-4'>{productDescription}</p>

        <div className="try gap-5 flex text-blue-500">
        <a href={tryDemo} >tryDemo<ArrowForwardIcon/></a>
        <a href={learnMore}>learnMore<ArrowForwardIcon/></a>
        </div>

        <div className="links flex py-3 gap-2">
        <a href={googlePlay}><img src="images\googlePlayBadge.svg" alt="" /></a>
        <a href={appStore}><img src="images\appstoreBadge.svg" alt="" /></a>
        </div>

      </div>
    </div>
  )
}

export default LeftImage
