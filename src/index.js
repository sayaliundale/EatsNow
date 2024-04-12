import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import approuter from './Components/Routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={approuter} />
  </>
);
export default approuter;

