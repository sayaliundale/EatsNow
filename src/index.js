import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Error from './Components/Error';

const approuter = createBrowserRouter(//array of obejects
  [
    {
      path:"/",
      element:<App/>,
      errorElement:<Error/>
    },
    {
      path :"/aboutus", 
      element:<Aboutus/>,
      
    }
  ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={approuter} />
  </>
);


