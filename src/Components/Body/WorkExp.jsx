//jshint esversion:6 

import React from "react";
import WorkCard from "./BodyComponents/WorkExpCardComponent";
import WorkModel from "./Model/WorkExp.json";

import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

function WorkExp() {

    function downloadCV(){
        
    }
    return (
        <div className="pb-5 md:max-w-6xl mx-auto">
            <div className="md:w-1/2 w-auto text-3xl text-center border-4 mx-auto">WORK HISTORY</div>

            {WorkModel.map(element => {
                return (<WorkCard params={element}/>);
            })}

            <div className="pt-5 text-center">
                <Button onClick={downloadCV} variant="contained" color="primary" endIcon={<CloudDownloadIcon />}>
                    Download CV
                </Button>
            </div>
        </div>
    )
}

export default WorkExp;