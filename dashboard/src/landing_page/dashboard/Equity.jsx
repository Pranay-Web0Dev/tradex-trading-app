import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Equity = () => {
  return (
    <div className='container h-[37vh] border-b-2 border-gray-200 '>
      <div className="upper flex py-10 gap-2.5">
        <AccessTimeIcon/>
        <h1>Equity</h1>
      </div>
      <div className="lower flex justify-between px-16 w-[34vw]">

        <div className="left">
          <h1 className='text-4xl'>3.74k</h1>
          <p className='text-sm text-gray-500'>margin available</p>
        </div>
        <div className="right text-gray-500 pt-1.5 ">
          <p>Margin used 0</p>
          <p>Opening balance 3.74k</p>
        </div>
      </div>
    </div>
  )
}

export default Equity
