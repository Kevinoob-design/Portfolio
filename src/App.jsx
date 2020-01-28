//jshint esversion:6

import React from "react";

import AOS from 'aos';
import "aos/dist/aos.css"

// import asyncComponent from './AsyncComponen';
import Nav from "./Components/Navigation/Navigation";
import Home from "./Components/pages/Home/Body";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/pages/NotFound";

function App() {

    AOS.init({
        once: true
    });

    return (
    <div className="w-full text-white">
        <Nav />
        <Home/>
        <div className="bottomTheme text-lg">
            <Footer />
        </div>
    </div>
    );
}
export default App;