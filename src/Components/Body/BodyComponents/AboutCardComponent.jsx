//jshint esversion:6 

import React from "react";

function AboutCard(props){

    return (
        <div className="inline-block md:my-5 my-2 md:mx-1 bg-gray-800 cardBox border-2 p-2">
            <div className=""><p className="text-2xl text-center">{props.params.title}</p></div>
            <div><img src={props.params.img.url} alt={props.params.img.alt}/></div>
            <div><p className="text-base">{props.params.description}</p></div>
        </div>
    );
}

export default AboutCard;