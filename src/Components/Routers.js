import React from 'react';
import App from '../App';
import {createBrowserRouter} from "react-router-dom";
import Aboutus from "../Components/Aboutus";
import Error from '../Components/Error';
import Body from '../Components/Body';
import Intropage from '../Components/Intropage';
import Contactus from '../Components/Contactus';

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
            path :"/", 
            element:<Body/>
            
          },
          {
            path :"/aboutus", 
            element:<Aboutus/>,
            
          },
          {
            path :"/contactus", 
            element:<Contactus/>,
            
          }
        ],
      errorElement:<Error/>
    } 
  ]
);

export default approuter;