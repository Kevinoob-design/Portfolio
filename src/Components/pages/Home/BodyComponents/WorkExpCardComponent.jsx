//jshint esversion:6 

import React from "react";

function  WorkCard(props){
    return(
        <div className="inline-block workCard mt-5 p-2 mx-1 text-center shadow-2xl rounded border-t-4 border-blue-600" data-aos={props.params.animation} data-aos-duration="600">
            <div className="text-2xl shadow-inner rounded"><b>{props.params.Position}</b></div>
            
            <div className="my-3"><p>{props.params.companyName}</p></div>
            <div className="my-3"><p>{props.params.address}</p></div>

            <div className="my-5 resp">
                {props.params.responsabilities.map(element => { 
                    return <ul className="mb-3"><li>-{element.responsabilitie}</li></ul>
                    })}
            </div>

            <div className="my-3">
                <div className="w-1/2 text-xl inline border-2 mx-1 p-2">{props.params.date.from}</div>
                <span>–</span>
                <div className="w-1/2 text-xl inline border-2 mx-1 p-2">{props.params.date.to}</div>
            </div>
        </div>
    )
}
export default WorkCard;