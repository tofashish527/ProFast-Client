import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router.jsx'
import { RouterProvider } from 'react-router'
import Aos from 'aos'
import 'aos/dist/aos.css'
 Aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-7xl mx-auto'>
    <RouterProvider router={router} />
    </div> 
  </StrictMode>,
)
