// import { Dashboard } from '@mui/icons-material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Orders from './orders/Orders'
import Apps from './apps/Apps'
import Funds from './funds/Funds'
import Holdings from './holdings/Holdings'
import Positions from './positions/Positions'

import NotFound from './NotFound'

const Content = () => {
  return (
    <div className='container w-[100vw] h-[88.4vh] flex border-2 border-gray-200 pb-0 mb-0'>

      <div className="left border-2 border-gray-200 border-t-0 w-[32vw] h-full ">

      <div className="top flex justify-between w-[32vw]  px-4.5 border-b-2 border-gray-200 py-2 ">
        <p className='text-gray-600'>Search eg.infy, bse, nifty fut weekly, gold mcx</p>
        <p className='text-gray-400'>9/50</p>
      </div>
      <div className="bottom border-t-2 border-gray-200  h-[77vh]"> dfh</div>
      <div className="pageNo border-t-2 border-gray-200">
        <span className='p-2 border-x-2 border-gray-200'>1</span>
        <span className='p-2 border-x-2 border-gray-200'>2</span>
        <span className='p-2 border-x-2 border-gray-200'>3</span>
        <span className='p-2 border-x-2 border-gray-200'>4</span>
      </div>
      </div>

      <div className="right w-[68vw]">
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/orders' element={<Orders/>} />
          <Route path='/Holdings' element={<Holdings/>} />
          <Route path='/Positions' element={<Positions/>} />
          <Route path='/Funds' element={<Funds/>} />
          <Route path='/Apps' element={<Apps/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Content
