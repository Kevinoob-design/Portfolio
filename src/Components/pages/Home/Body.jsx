//jshint esversion:6 

import React from "react";
import Header from "./Header/Header"
import Testimonials from "./Testimonials";
import About from "./About";
import WorkExp from "./WorkExp";
import Projects from "./Projects";
import PerpExp from "./PerExp";
import Contact from "./Contact";

import Skills from "./NewSkills";
import Education from "../Education/Education";
import Gallery from "../Photography/ShowCase";

function Body() {

    return (
        <div id="Body" className="z-10">
            <Header />
            <div className="mx-auto p-2">
                {/* <Testimonials /> */}
                {/* <About /> */}
                <Skills />
                {/* <Education /> */}
                {/* <Projects/> */}
                {/* <Gallery/> */}
                {/* <WorkExp /> */}
                {/* <Projects /> */}
                {/* <PerpExp/> */}
            </div>
            <Contact />
        </div>);
}
export default Body;