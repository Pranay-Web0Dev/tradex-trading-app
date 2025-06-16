import React from 'react'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Eduction from './Eduction'
import OpenAccount from '../OpenAccount'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Pricing from './Pricing'

const Homepg = () => {
    return (
        <div>
            
            <Hero />
            <div className="breakpoint sticky  p-0 w-[100%] bg-gray-300 h-0.5 my-20"></div>
            <Awards />
            <div className="breakpoint sticky  p-0 w-[100%] bg-gray-300 h-0.5 my-20"></div>
            <Stats />
            <div className="breakpoint sticky  p-0 w-[100%] bg-gray-300 h-0.5 my-20"></div>
            <Pricing />
            <div className="breakpoint sticky  p-0 w-[100%] bg-gray-300 h-0.5 my-20"></div>
            <Eduction />
            <div className="breakpoint sticky  p-0 w-[100%] bg-gray-300 h-0.5 my-20"></div>
            <OpenAccount />
            
        </div>
    )
}

export default Homepg
