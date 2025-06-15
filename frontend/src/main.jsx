import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Homepg from './landing_page/home/Homepg.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepg />
  </StrictMode>,
)
