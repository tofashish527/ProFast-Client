import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router.jsx'
import { RouterProvider } from 'react-router'
import Aos from 'aos'
import 'aos/dist/aos.css'
import AuthProvider from './Context/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
 Aos.init();
 const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-7xl mx-auto'>
      <QueryClientProvider client={queryClient}>
          <AuthProvider><RouterProvider router={router} /></AuthProvider>
      </QueryClientProvider>
    </div> 
  </StrictMode>,
)
