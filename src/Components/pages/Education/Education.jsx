import React from "react";
import EduModel from "./EducationModel.json";
import CardComponent from "./EduCardComponent";
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
    return ( 
        <div className="mx-auto max-w-6xl text-2xl text-center mx-auto">
            <div className="text-center"><h1 className="text-4xl">Education timeline</h1></div>
            <VerticalTimeline>
                {EduModel.map(element => {
                    return <CardComponent params={element}/>
                })}
            </VerticalTimeline>
        </div>
     );
}
export default Education;