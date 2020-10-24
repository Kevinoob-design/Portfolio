//jshint esversion:6 

import React from "react";
import ProjectCard from "./BodyComponents/ProjectCardComponent";
import ProjectsModel from "./Model/Projects.json";
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Projects() {

    return (
        <div id="work" className="my-5">
            <div className="max-w-6xl w-1/2 mx-auto text-3xl text-center rounded my-5"><b>Projects</b></div>
            <VerticalTimeline>
                {ProjectsModel.map(element => {
                    return (<ProjectCard params={element} />);
                })}
            </VerticalTimeline>
        </div>
    )
}
export default Projects;