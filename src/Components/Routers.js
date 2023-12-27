import React from 'react';
import App from '../App';
import {createBrowserRouter} from "react-router-dom";
import Aboutus from "../Components/Aboutus";
import Error from '../Components/Error';
import Intropage from '../Components/Intropage';
import Contactus from '../Components/Contactus';
import RestaurantMenu from './RestaurantMenu';

const approuter = createBrowserRouter(//array of objects
  [
    {
      path:"/",
      element:<App/>,
      children:
        [
          {
            path :"/", 
            element:<Intropage/>
            
          },
         
       
          {
            path :"/aboutus", 
            element:<Aboutus/>,
            
          },
          {
            path :"/contactus", 
            element:<Contactus/>,
            
          },
          {
            path :"/restaurants/:resId", 
            element:<RestaurantMenu/>,
            
          }
        ],
      errorElement:<Error/>
    } 
  ]
);

export default approuter;