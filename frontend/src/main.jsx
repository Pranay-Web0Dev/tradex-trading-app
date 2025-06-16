import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Homepg from './landing_page/home/Homepg.jsx'
import Aboutpg from './landing_page/about/Aboutpg.jsx'
import SignUp from './landing_page/signup/SignUp.jsx'
import Pricingpg from './landing_page/pricing/Pricingpg.jsx'
import Productpg from './landing_page/product/Productpg.jsx'
import Supportpg from './landing_page/support/Supportpg.jsx'

import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import NotFound from './landing_page/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Homepg/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/about' element={<Aboutpg/>}></Route>
      <Route path='/pricing' element={<Pricingpg/>}></Route>
      <Route path='/product' element={<Productpg/>}></Route>
      <Route path='/support' element={<Supportpg/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>

    </Routes>

  <Footer/>
  </BrowserRouter>
)
