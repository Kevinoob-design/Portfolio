//jshint esversion:6 

import React from "react";
import AboutCard from "./BodyComponents/AboutCardComponent";
import aboutModel from "./Model/About.json";

function About(){
    return (
    <div id="about" className="pt-5">
        <div className="md:w-1/2 w-auto text-3xl text-center rounded mx-auto">
            <b>ABOUT</b>
        </div>
        <div className="px-auto flex flex-wrap justify-center max-w-6xl mx-auto">
            {aboutModel.map(element => {
                return <AboutCard params={element} />
            })}
        </div>
    </div>);
}
export default About;