//jshint esversion:6 

import React from "react";

function AboutCard(props){
    return (
        <div className="aboutCard relative w-1/5 flex-grow md:mx-1 md:my-5 my-2 bg-gray-900 p-2" to={props.params.link}>
            <div className={"h-full rounded shadow-xl border-t-4 " + props.params.color} data-aos={props.params.animation} data-aos-duration="600">
                <div><p className="text-2xl text-center">{props.params.title}</p></div>
                <div><img src={props.params.img.url} alt={props.params.img.alt}/></div>
                <div><p className="">{props.params.description}</p></div>
            </div>
        </div>
    );
}
export default AboutCard;