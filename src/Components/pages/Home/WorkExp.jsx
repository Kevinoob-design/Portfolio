//jshint esversion:6 

import React from "react";
import WorkCard from "./BodyComponents/WorkExpCardComponent";
import WorkModel from "./Model/WorkExp.json";

function WorkExp() {

    return (
        <div id="work" className="pb-5">
            <div className="md:w-1/2 w-auto text-3xl text-center shadow-xl rounded mx-auto"><b>WORK HISTORY</b></div>

            {WorkModel.map(element => {
                return (<WorkCard params={element}/>);
            })}

            {/* <div className="pt-5 text-center">
                <Button onClick={downloadCV} variant="contained" color="primary" endIcon={<CloudDownloadIcon />}>
                    Download CV
                </Button>
            </div> */}
        </div>
    )
}

export default WorkExp;