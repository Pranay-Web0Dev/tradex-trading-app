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
            <Navbar />
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Eduction />
            <OpenAccount />
            <Footer />
        </div>
    )
}

export default Homepg
