//jshint esversion:6 

import React from "react";
import Header from "./Header/Header"
import Testimonials from "./Testimonials";
import About from "./About";
import WorkExp from "./WorkExp";
import PerpExp from "./PerExp";
import Contact from "./Contact";

function Body(){

    return (
        <div>
            <Header />
            <div className="w-full md:max-w-6xl mx-auto">
                <Testimonials/>
                <About/>
                <WorkExp/>
                <PerpExp/>
                <Contact/>
            </div>
        </div>);
}
export default Body;