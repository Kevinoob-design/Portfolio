//jshint esversion:6

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import AOS from 'aos';
import "aos/dist/aos.css"

import Nav from "./Components/Navigation/Navigation";

import Home from "./Components/pages/Home/Body";
import Form from "./Components/pages/Form/Form";
import ShowCase from "./Components/pages/Photography/ShowCase";

import Footer from "./Components/Footer/Footer";

function App(){

    AOS.init();

    return (
    <BrowserRouter>
        <div className="w-full h-screen text-white">
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/Form" component={Form} />
            <Route path="/Photo" component={ShowCase}/>
            <div className="bottomTheme">
                <Footer />
            </div>
        </div>
    </BrowserRouter>);
}
export default App;