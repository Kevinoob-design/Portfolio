//jshint esversion:6 

import React from "react";
import {Link} from "react-router-dom";

function AboutCard(props){
    return (
        <Link className="">
            <div className={"inline-block md:my-5 my-2 md:mx-1 aboutCard p-2 rounded shadow-xl border-t-4 " + props.params.color}>
                <div className=""><p className="text-2xl text-center">{props.params.title}</p></div>
                <div><img src={props.params.img.url} alt={props.params.img.alt}/></div>
                <div><p className="text-base">{props.params.description}</p></div>
            </div>
        </Link>
    );
}

export default AboutCard;