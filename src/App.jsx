import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import GraphicsDesign from './Pages/GraphicsDesign'
import MobileApps from './Pages/MobileApps'
import WebDevelopment from './Pages/WebDevelopment'
import SupportMaintenance from './Pages/SupportMaintenance'
import SecuritySystem from './Pages/SecuritySystem'
import Services from './Pages/Services'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/services/graphics",
          element:<GraphicsDesign/>
        },
        {
          path:"/services/mobile-apps",
          element:<MobileApps/>
        },
        {
          path:"/services/web-dev",
          element:<WebDevelopment/>
        },
        {
          path:"/services/support",
          element:<SupportMaintenance/>
        },
        {
          path:"/services/security",
          element:<SecuritySystem/>
        },
        {
          path:"/services",
          element:<Services/>
        },

      ]
    }
  ])
  
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App