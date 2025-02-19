import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Component/Routes/Routes';
import { Bounce, ToastContainer } from 'react-toastify';
import AuthProviderx from './Provider/AuthProviderx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProviderx>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
      />  
      </QueryClientProvider>
      
      </AuthProviderx>

    </div>
      </StrictMode>,
)
