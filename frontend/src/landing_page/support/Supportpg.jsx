import React from 'react'
import Hero from './Hero'
import CreateTicket from './CreateTicket'
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';

const Supportpg = () => {
  return (
    <div>
      <Hero />
      <h1 className='w-[70vw] mx-auto text-xl text-gray-500 font-semibold py-10'>
        To create a ticket, select a relevant topic
      </h1>

      <div className='w-[75vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 mb-20'>
        <CreateTicket 
          logo={<ControlPointOutlinedIcon />} 
          headingName={"Account Opening"} 
          listingArray={[
            "Resident individual",
            "Minor",
            "Non Resident Indian (NRI)",
            "Company, Partnership, HUF and LLP",
            "Glossary"
          ]}
        />
        <CreateTicket 
          logo={<PersonOutlineIcon />} 
          headingName={"Your Zerodha Account"} 
          listingArray={[
            "Your Profile",
            "Account modification",
            "Client Master Report (CMR) and Depository Participant (DP)",
            "Nomination",
            "Transfer and conversion of securities"
          ]}
        />
        <CreateTicket 
          logo={<InsertChartOutlinedIcon />} 
          headingName={"Kite"} 
          listingArray={[
            "IPO",
            "Trading FAQs",
            "Margin Trading Facility (MTF) and Margins",
            "Charts and orders",
            "Alerts and Nudges",
            "General"
          ]}
        />
        <CreateTicket 
          logo={<AccountBalanceWalletOutlinedIcon />} 
          headingName={"Funds"} 
          listingArray={[
            "Add money",
            "Withdraw money",
            "Add bank accounts",
            "eMandates"
          ]}
        />
        <CreateTicket 
          logo={<DashboardCustomizeOutlinedIcon />} 
          headingName={"Console"} 
          listingArray={[
            "Portfolio",
            "Corporate actions",
            "Funds statement",
            "Reports",
            "Profile",
            "Segments"
          ]}
        />
        <CreateTicket 
          logo={<RadioButtonUncheckedOutlinedIcon />} 
          headingName={"Coin"} 
          listingArray={[
            "Mutual funds",
            "National Pension Scheme (NPS)",
            "Features on Coin",
            "Payments and Orders",
            "General"
          ]}
        />
      </div>
    </div>
  )
}

export default Supportpg
