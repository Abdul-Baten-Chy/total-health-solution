import {createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../About/About";
import Events from "../Home/Events";
import Register from "../Register/Register";
import Details from "../Home/Details";
import SignIn from "../signin/SignIn";
import Private from "../private/Private";
import Error from "../error/Error";
import Journal from "../journal/Journal";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
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
            element: <Private><Events></Events></Private>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"/:ids",
          element:<Private><Details></Details></Private>,
          loader:()=>fetch("../../../public/events.json")
        },
        {
          path:"/signIn",
          element:<SignIn></SignIn>
        },
        {
          path:"/journal",
          element:<Private><Journal></Journal></Private>
        }
      ]
    },
  ])

export default router;