//jshint esversion:6 

import React from "react";

function TestimonialCard(props){
    return(
        <div className="testimony text-center md:px-24">
            <p className="pb-5">{props.params.testimony}</p>
            <p>{props.params.ocupation}</p>
            <p>{props.params.witness}</p>
        </div>
    )
}
export default TestimonialCard;