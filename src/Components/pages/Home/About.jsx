//jshint esversion:6 

import React, {useState, useEffect} from "react";
import AboutCard from "./BodyComponents/AboutCardComponent";
import aboutModel from "./Model/About.json";
import Skills from "./Skills";

function About(){

    // const [aboutModel, setAboutModel] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/about/api/about")
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((myJson) => {
    //             console.log(myJson);
    //             // setAboutModel(myJson);
    //         });
    // }, []);

    return (
    <div id="about" className="pt-5 md:max-w-6xl mx-auto">
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