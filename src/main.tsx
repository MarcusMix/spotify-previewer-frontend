import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import AppRoutes from './routes'
import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <div className='bg-grey-200 min-h-screen text-black dark:bg-zinc-900 dark:text-white'>
        <div className='container mx-auto px-4'>
          <BrowserRouter>
            <AppRoutes/>
          </BrowserRouter>
        </div>
      </div>
    </RecoilRoot>
  </React.StrictMode>,
)
