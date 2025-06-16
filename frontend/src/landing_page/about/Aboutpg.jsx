import React from 'react'
import Hero from './Hero'
import Team from './Team'

const Aboutpg = () => {
  return (
    <div>
      <Hero />
      <div className="breakpoint sticky  p-0 w-[100%] bg-gray-300 h-0.5 my-20"></div>
      <Team />
    </div>
  )
}

export default Aboutpg
