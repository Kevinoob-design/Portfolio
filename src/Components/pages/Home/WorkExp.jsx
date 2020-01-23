//jshint esversion:6 

import React from "react";
import WorkCard from "./BodyComponents/WorkExpCardComponent";
import WorkModel from "./Model/WorkExp.json";

function WorkExp() {

    return (
        <div id="work" className="pb-5">
            <div className="text-3xl text-center shadow-xl rounded"><b>WORK HISTORY</b></div>
            <div className="flex flex-wrap">
                {WorkModel.map(element => {
                    return (<WorkCard params={element} />);
                })}
            </div>
        </div>
    )
}
export default WorkExp;