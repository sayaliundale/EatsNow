import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Aboutus from "./Components/Aboutus";
import Error from './Components/Error';
import Body from './Components/Body';
import Intropage from './Components/Intropage';
import Contactus from './Components/Contactus';

const approuter = createBrowserRouter(//array of obejects
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={approuter} />
    
  </>
);
export default approuter;

