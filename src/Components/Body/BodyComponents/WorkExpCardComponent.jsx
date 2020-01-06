//jshint esversion:6 

import React from "react";

function  WorkCard(props){
    return(
        <div className="inline-block workCard bg-gray-800 text-center mt-5 p-2 mx-1">
            <div className="text-2xl border-2 bg-black"><p>{props.params.Position}</p></div>
            
            <div className="my-3"><p>{props.params.companyName}</p></div>
            <div className="my-3"><p>{props.params.address}</p></div>

            <div className="my-5 text-left resp">
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