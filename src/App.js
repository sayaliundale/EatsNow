import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";


const App = () => {
  return (
    <>
    
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>

  );

}


export default App;