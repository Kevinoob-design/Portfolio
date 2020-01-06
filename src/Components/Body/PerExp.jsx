//jshint esversion:6 

import React from "react";
import PerExpCard from "./BodyComponents/PerExpCardComponent";
import perExpModel from "./Model/PerExp.json";

function PerExp(){
    return (
        <div>
            <div className="pb-5 md:max-w-6xl mx-auto">
                <div className="md:w-1/2 w-auto text-3xl text-center border-4 mx-auto">PERSONAL EXPERIENCE</div>

                {perExpModel.map(element => {
                    return (<PerExpCard params={element}/>);
                })}
            </div>
        </div>
    )
}
export default PerExp;