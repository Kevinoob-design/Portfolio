//jshint esversion:6

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./Components/Navigation/Navigation";
import Home from "./Components/pages/Home/Body";
import Footer from "./Components/Footer/Footer";

function App(){

    return (
    <BrowserRouter>
        <div className="w-full h-screen md:px-10 text-white">
            <Nav />
            <Route exact path="/" component={Home} />
            <Footer />  
        </div>
    </BrowserRouter>);
}
export default App;