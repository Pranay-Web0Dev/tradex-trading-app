import React from 'react'

const Team = () => {
  return (
    <div className='container flex flex-col justify-center items-center mb-28 '>

      <h1 className='text-4xl font-semibold mb-16'>People</h1>

      <div className="founder flex justify-center items-center ml-24">
        <div className="left text-center mr-20">
          <img src="/images/pranay2.jpg" className='w-[200px] h-[200px]  rounded-full object-cover object-center filter  overflow-auto grayscale' alt="founder" />
          <h1 className='pt-2 text-2xl font-semibold'>Pranay Kadav</h1>
        </div>
        <div className="right w-[35vw] ml-20">
          <p>Pranay bootstrapped and founded TradeX with a vision to make stock trading simple, accessible, and transparent for every Indian. His journey as a self-taught trader through ups and downs gave him deep insights into the everyday struggles of retail investors.</p>
          <p>Today, TradeX is a reflection of his passion for product-driven solutions in finance — blending clean design, high-speed tech, and educational initiatives. <br /><br />Pranay actively mentors fintech builders and contributes to discussions on financial inclusion and digital public infrastructure.</p>
          <p>Building intuitive systems is his creative zen. <br />
            Connect on <a href="https://www.linkedin.com/in/dev-pranay-kadav/" className='text-blue-500'>LinkedIn</a>  / <a href="https://github.com/Pranay-Web0Dev?tab=repositories" className='text-blue-500'>GitHub</a></p>
        </div>
      </div>

    </div>
  )
}

export default Team
