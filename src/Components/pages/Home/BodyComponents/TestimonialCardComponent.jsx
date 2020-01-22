//jshint esversion:6 

import React from "react";

function TestimonialCard(props){
    return(
        <div className="text-center md:px-24">
            <blockquote>
                <p className="pb-5"><span className="text-4xl">&#x201c;</span>{props.params.testimony}</p>
                <p>{props.params.ocupation}</p>
                <cite>— {props.params.witness}</cite>
            </blockquote>
        </div>
    )
}
export default TestimonialCard;