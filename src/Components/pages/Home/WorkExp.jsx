//jshint esversion:6 

import React from "react";
import WorkCard from "./BodyComponents/WorkExpCardComponent";
import WorkModel from "./Model/WorkExp.json";
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function WorkExp() {

    return (
        <div id="work" className="pb-5">
            <div className="md:w-1/2 w-auto mx-auto text-3xl text-center shadow-xl rounded"><b>WORK HISTORY</b></div>
            <VerticalTimeline>
                {WorkModel.map(element => {
                    return (<WorkCard params={element} />);
                })}
            </VerticalTimeline>
        </div>
    )
}
export default WorkExp;