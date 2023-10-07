import {createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../About/About";
import Events from "../Home/Events";
import Register from "../Register/Register";
import Details from "../Home/Details";
import SignIn from "../signin/SignIn";
  
  
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
        },
        {
          path:"/events/:ids",
          element:<Details></Details>,
          loader:()=>fetch("../../../public/events.json")
        },
        {
          path:"/signIn",
          element:<SignIn></SignIn>
        }
      ]
    },
  ])

export default router;