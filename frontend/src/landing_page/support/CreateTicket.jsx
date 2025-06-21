import React from 'react'

const CreateTicket = ({logo, headingName, listingArray}) => {
  return (
    <div className='container '>
      <div className="heading flex justify-start  items-center w-[15vw] mb-5">
          {logo}
          <h1 className='text-lg px-2'>{headingName}</h1>

      </div>
      <div className="lists text-blue-600 pl-6">
          <ul>
            {
              listingArray.map((list, idx)=>(
                <li className='py-2' key={idx}> <a href="/">{list}</a></li>               
              ))
              
            }
          </ul>
      </div>

    </div>
  )
}

export default CreateTicket
