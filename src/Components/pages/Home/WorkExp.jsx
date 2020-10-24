//jshint esversion:6 

import React from "react";
import WorkCard from "./BodyComponents/WorkExpCardComponent";
import WorkModel from "./Model/WorkExp.json";
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function WorkExp() {

    return (
        <div id="work" className="my-5">
            <div className="max-w-6xl w-1/2 mx-auto text-3xl text-center rounded my-5"><b>WORK HISTORY</b></div>
            <VerticalTimeline>
                {WorkModel.map(element => {
                    return (<WorkCard params={element} />);
                })}
            </VerticalTimeline>
        </div>
    )
}
export default WorkExp;