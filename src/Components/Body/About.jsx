//jshint esversion:6 

import React from "react";
import AboutCard from "./BodyComponents/AboutCardComponent";
// import aboutModel from "./Model/About.json";
import Skills from "./Skills";

import axios from "axios";

function About(){

    let aboutModel = [];

    // axios.get("http://localhost:3000/about/api/get").then(myJson => {
    //     console.table(myJson);
    // });

    fetch("http://localhost:3001/about/api/get")
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            console.table(myJson);
        });

    return (
    <div className="pt-5 md:max-w-6xl mx-auto">
        <div className="md:w-1/2 w-auto text-3xl text-center border-4 mx-auto">
            ABOUT
        </div>

        <div className="">
            {aboutModel.map(element => {
                return <AboutCard params={element} />
            })}
        </div>

        <Skills/>
    </div>);
}
export default About;