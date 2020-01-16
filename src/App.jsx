//jshint esversion:6

import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./Components/Navigation/Navigation";

import Home from "./Components/pages/Home/Body";
import Form from "./Components/pages/Form/Form";

import Footer from "./Components/Footer/Footer";

function App(){

    return (
    <BrowserRouter>
        <div className="w-full h-screen text-white">
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/Form" component={Form} />
            <div className="bottomTheme">
                <Footer />
            </div>
        </div>
    </BrowserRouter>);
}
export default App;