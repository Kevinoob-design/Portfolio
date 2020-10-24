//jshint esversion:6

import React from "react";

import AOS from 'aos';
import "aos/dist/aos.css"

// import asyncComponent from './AsyncComponen';
import Nav from "./Components/Navigation/Navigation";
import Home from "./Components/pages/Home/Body";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/pages/NotFound";
import Particles from 'react-particles-js';

function App() {

    AOS.init({
        once: true,
        mirror: false
    });

    return (
    <div className="w-full text-white">
        <Particles className="absolute w-full h-screen particles"/>
        <Nav/>
        <Home/>
        <div className="bottomTheme text-lg">
            <Footer />
        </div>
    </div>
    );
}
export default App;