//jshint esversion:6 

import React from "react";
import Header from "./Header/Header"
import Testimonials from "./Testimonials";
import About from "./About";
import WorkExp from "./WorkExp";
import PerpExp from "./PerExp";

function Body(){

    return (
    <div>
        <Header/>
        <Testimonials/>
        <About/>
        <WorkExp/>
        <PerpExp/>
    </div>);
}
export default Body;