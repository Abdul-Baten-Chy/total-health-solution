import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './componenets/Route/Route'
import { RouterProvider } from 'react-router-dom'
import MyContext from './componenets/context/MyContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContext>
      <RouterProvider router={router} />
    </MyContext>
  </React.StrictMode>,
)
