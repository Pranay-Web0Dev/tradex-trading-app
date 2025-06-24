import React from 'react'

const Orders = () => {
    return (
        <div className="container text-center mx-auto mt-20">
            <img src="./images/book.png" className='w-[5vw] mx-auto invert-50' alt="" />
            <p className='py-3 text-gray-600'>you haven't place any order yet</p>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-black hover:text-white  rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Get Started
                </span>
            </button>

        </div>
    )
}

export default Orders
