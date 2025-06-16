import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='container  w-full border  border-t-[1px] border-gray-300 bg-gray-100'>
      <div className="upper-section  pt-16 flex justify-evenly   " >

        <div className="left ">
          <div className="logo flex gap-2 py-3 ">
            <img src="images/trend.png" alt="tradex logo" className='w-[35px] ' />
            <span className='text-2xl font-semibold pt-1.5 '>TradeX</span>
          </div>
          <p > &copy; 2025 - 2050, TradeX Broking Ltd.</p>
          <p>All rights  reserved.</p>
          <p className='text-gray-500'><FacebookIcon/> <TwitterIcon/> <InstagramIcon/> <LinkedInIcon/></p>
        </div>

        <div className="right">

          <div className="first-row flex flex-col">
            <h1 className='font-semibold pb-3'>Company</h1>
            <a className='text-gray-700' href="/">About</a>
            <a className='text-gray-700' href="/">Products</a>
            <a className='text-gray-700' href="/">Pricing</a>
            <a className='text-gray-700' href="/">Refferal programme</a>
            <a className='text-gray-700' href="/">Careers</a>
            <a className='text-gray-700' href="/">TradeX.tech</a>
            <a className='text-gray-700' href="/">Press & Media</a>
            <a className='text-gray-700' href="/">TradeX Cares(CSR)</a>
          </div>
        </div>

        <div className="second-row flex flex-col">
          <h1 className='font-semibold pb-3'>Support</h1>
          <a className='text-gray-700' href="/">Contact</a>
          <a className='text-gray-700' href="/">Support portal</a>
          <a className='text-gray-700' href="/">Z-connect blog</a>
          <a className='text-gray-700' href="/">List of charges</a>
          <a className='text-gray-700' href="/">Downloads & Resources</a>
        </div>

        <div className="third-row flex flex-col">
          <h1 className='font-semibold pb-3'>Account</h1>
          <a className='text-gray-700' href="/">Open an account</a>
          <a className='text-gray-700' href="/">Fund transfer</a>
          <a className='text-gray-700' href="/">60 day challenge</a>
        </div>
      </div>

      <div className="lower w-10/12 mx-auto pt-5">
        <p className='pb-4 text-[15px]'>TradeX Securities Pvt. Ltd.: Member of NSE & BSE | SEBI Registration No.: INZ000XXXXX
          CDSL: Depository services through TradeX Depository Pvt. Ltd. | SEBI Registration No.: IN-DP-100-20XX
          Commodity Trading through TradeX Commodities Pvt. Ltd. | MCX: 12345 | SEBI Registration No.: INZ000XXXXX
          Registered Office: TradeX Pvt. Ltd., #45/3, 2nd Floor, Alpha Tech Park, Sector 4, HSR Layout, Bengaluru - 560102, Karnataka, India.

          For any complaints related to securities broking, please email us at complaints@tradex.com. For depository-related queries, contact dp@tradex.com. Kindly read the Risk Disclosure Document carefully as prescribed by SEBI | ICF.

        </p>
        <h1>Complaint Redressal:</h1>
        <p className='pb-4 text-[15px]'>To file a complaint on the SEBI SCORES platform:
          Register at https://scores.gov.in and submit your Name, PAN, Address, Mobile No., Email ID, and complaint details.
          Benefits: Effective Communication, Speedy Redressal. </p>

        <p className='pb-4 text-[15px]'>Investments in securities market are subject to market risks. Please read all scheme-related documents carefully before investing.</p>

        <p className='pb-4 text-[15px]'>Prevent unauthorized transactions in your account.
          Always update your mobile number/email ID with your stockbroker. Receive alerts for all your transactions directly from Exchange & Depository.</p>
      </div>
    </div>
  )
}

export default Footer
