import React from 'react'
import Equity from './Equity'
import Holdings from './Holdings'

const Dashboard = () => {
  return (
    <div className='px-7'>
      <h1 className='text-xl py-4 px-4 border-b-2 border-gray-200  '>Hi, User!</h1>
      <Equity/>
      <Holdings/>
    </div>
  )
}

export default Dashboard
