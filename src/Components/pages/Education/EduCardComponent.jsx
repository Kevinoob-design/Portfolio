import React from "react";
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { GiBookmarklet } from "react-icons/gi";

const EducationCard = (props) => {
    return ( 
        <VerticalTimelineElement 
            className=""
            contentStyle={{ background: 'rgb(26, 32, 44)', 'box-shadow': '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 'border-top-width': '4px', 'border-color': '#3182ce'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(26, 32, 44)' }}
            date={props.params.Time}
            iconStyle={{ background: '#3182ce' }}
            icon={<GiBookmarklet />}>

            <div className="flex flex-no-wrap text-2xl my-2 border-b-2">
                <div className="w-2/3">{props.params.Type}</div>
                <div className="w-1/3">{props.params.School}</div>
            </div>
            <div className="text-base">{props.params.Title}</div>
            <div className="text-base">{props.params.Location}</div>
        </VerticalTimelineElement>
     );
}
export default EducationCard;