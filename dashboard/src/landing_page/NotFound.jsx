import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-[50vh]'>
      <h2 className="text-3xl font-semibold text-red-600">404, Page Not Found</h2>
        <p className='text-md my-2'>Sorry, the page you are looking for does not exist</p>
    </div>
  )
}

export default NotFound
