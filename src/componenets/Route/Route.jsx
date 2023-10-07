import {createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../About/About";
import Events from "../Home/Events";
import Register from "../Register/Register";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element: <About></About>
        },
        {
            path:"/events",
            element: <Events></Events>
        },
        {
            path:"/register",
            element:<Register></Register>
        }
      ]
    },
  ])

export default router;