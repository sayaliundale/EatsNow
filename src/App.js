import React from "react";
import Header from "./Components/Header";
import Intropage from "./Components/Intropage";
import Body from "./Components/Body";
import approuter from ".";
import { Outlet } from "react-router-dom";


const App =() =>{
  return(
    <>
    <Header/>
    <Outlet/>
    </>

  );

}


export default App;