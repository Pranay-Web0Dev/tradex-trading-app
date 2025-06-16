import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const RightImage = ({imageUrl, productName, productDescription, learnMore}) => {
  return (
     <div className='container flex justify-evenly items-center'>
     
      <div className="left w-[30%]">
        <h1 className='text-3xl font-semibold'>{productName}</h1>
        <p className='py-4'>{productDescription}</p>    
        <a href={learnMore} className='text-blue-500'>learnMore<ArrowForwardIcon/></a>
      </div>

       <div className="right">
        <img src={imageUrl} alt="" />
      </div>

    </div>
  )
}

export default RightImage
