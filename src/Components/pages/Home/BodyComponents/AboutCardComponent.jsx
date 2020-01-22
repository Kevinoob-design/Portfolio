//jshint esversion:6 

import React from "react";
import {Link} from "react-router-dom";

function AboutCard(props){
    return (
        <Link className="aboutCard md:mx-1 md:my-5 my-2" to={props.params.link}>
            <div className={"p-2 rounded shadow-2xl border-t-4 " + props.params.color} data-aos={props.params.animation} data-aos-duration="600">
                <div className=""><p className="text-2xl text-center">{props.params.title}</p></div>
                <div><img src={props.params.img.url} alt={props.params.img.alt}/></div>
                <div><p className="">{props.params.description}</p></div>
            </div>
        </Link>
    );
}
export default AboutCard;