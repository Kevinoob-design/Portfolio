//jshint esversion:6 

import React from "react";
import Testimonials from "./Testimonials";
import About from "./About";
import WorkExp from "./WorkExp";
import PerpExp from "./PerExp";

function Body(){

    return (
    <div>
        <Testimonials/>
        <About/>
        <WorkExp/>
        <PerpExp/>
    </div>);
}
export default Body;