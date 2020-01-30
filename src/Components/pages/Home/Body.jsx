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
        <div id="Body">
            <Header />
            <div className="mx-auto p-2">
                {/* <Testimonials/> */}
                <About/>
                <WorkExp/>
                <PerpExp/>
            </div>
            <Contact />
        </div>);
}
export default Body;