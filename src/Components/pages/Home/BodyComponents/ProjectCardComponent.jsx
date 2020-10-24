//jshint esversion:6 

import React from "react";
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { MdWork } from "react-icons/md";

function ProjectCard(props){
    return(
        <VerticalTimelineElement
            contentStyle={{ background: 'rgb(26, 32, 44)', 'box-shadow': '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 'border-top-width': '4px', 'border-color': '#3182ce' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(26, 32, 44)' }}
            date={props.params.date.from + " — " + props.params.date.to}
            iconStyle={{ background: '#3182ce' }}
            icon={<MdWork />}>

            <div className="text-2xl border-b-2"><b>{props.params.Position}</b></div>
            
            <div className="my-3"><p>{props.params.companyName}</p></div>
            <div className="my-3"><p>{props.params.address}</p></div>

            <div>
                {props.params.responsabilities.map(element => {
                    return <ul className="mb-3 text-base"><li>-{element.responsabilitie}</li></ul>
                    })}
            </div>
        </VerticalTimelineElement>
    )
}
export default ProjectCard;