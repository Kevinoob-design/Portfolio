//jshint esversion:6 

import React, {useState, useEffect} from "react";
import AboutCard from "./BodyComponents/AboutCardComponent";
import aboutModel from "./Model/About.json";
// import Skills from "./Skills";
import Skills from "./NewSkills";
import Education from "../Education/Education";
// import Portfolio from "../Portfolio/";
import Projects from "../Projects/Projects";
import Gallery from "../Photography/ShowCase";

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
    <div id="about" className="pt-5">
        <div className="md:w-1/2 w-auto text-3xl text-center shadow-2xl rounded mx-auto">
            <b>ABOUT</b>
        </div>
        <div className="px-auto flex flex-wrap justify-center max-w-6xl mx-auto">
            {aboutModel.map(element => {
                return <AboutCard params={element} />
            })}
        </div>
        <Skills/>
        <Education/>
        {/* <Projects/> */}
        {/* <Gallery/> */}
    </div>);
}
export default About;