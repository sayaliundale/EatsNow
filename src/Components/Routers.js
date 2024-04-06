import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Aboutus from "../Components/Aboutus";
import Error from '../Components/Error';
import Intropage from '../Components/Intropage';
import Contactus from '../Components/Contactus';
import RestaurantMenu from './RestaurantMenu';
import Signup from './Authentication/Signup';
import Cart from './Cart';
import Login from './Authentication/Login';

const approuter = createBrowserRouter(
  [
    {
      path: "/signup", 
      element: <Signup />
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path: "/",
      element: <App />, 
      children: [
        {
          path: "/intropage",
          element: <Intropage />
        },
        {
          path: "/aboutus",
          element: <Aboutus />
        },
        {
          path: "/contactus",
          element: <Contactus />
        },
        {
          path: "/restaurant/:res_id",
          element: <RestaurantMenu />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ],
      errorElement: <Error />
    }
  ]
);


export default approuter;
