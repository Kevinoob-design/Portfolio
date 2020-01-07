//jshint esversion:6 

import React from "react";

function PerExpCard(props){
    return(
        <div className="bg-gray-800 p-5 mt-5">
            <div className="md:flex text-center">
                <div className="md:w-1/3 w-56 md:inline-block mx-auto"><img src={props.params.img.url} alt={props.params.img.alt}/></div>
                <div className="md:w-2/3 md:text-4xl text-3xl align-middle middleAlign"><p className="py-16">{props.params.programName}</p></div>
            </div>
            <div>
                <p>{props.params.description}</p>
            </div>
        </div>
    )
}
export default PerExpCard;