import React from 'react'
import ReactDOM from 'react-dom/client'


//router 
import { RouterProvider } from 'react-router-dom'
import { router } from './router/'

//css
import "./config/css/font-family.css"
import "./config/css/main.css"
import "./config/css/mordern.nomalize.css"
import "./config/css/tailwind.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
