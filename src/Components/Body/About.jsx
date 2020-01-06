//jshint esversion:6 

import React from "react";
import AboutCard from "./BodyComponents/AboutCardComponent";
import AboutModel from "./Model/About.json";

function About(){

    const aboutModel = AboutModel;
    
    return (
    <div className="py-5 md:max-w-6xl mx-auto">
        <div className="md:w-1/2 w-auto text-3xl text-center border-4 mx-auto">ABOUT</div>

        <div className="">
            {aboutModel.map(element => {
                return <AboutCard params={element} />
            })}
        </div>

    </div>)
}

export default About;