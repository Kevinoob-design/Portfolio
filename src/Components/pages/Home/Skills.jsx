//jshint esversion:6 

import React from "react";
import chartModel from "./Model/Skills.json";
import Chart from "./BodyComponents/ChartComponent";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills(){

    return (
        <div id="skills" className="pb-5 my-5">
            <div className="md:w-1/2 w-auto text-2xl text-center mx-auto shadow-inner rounded "><b>SKILLS</b></div>

            <div className=" shadow-2xl rounded p-5">
                <div className="pb-5">
                    <Slider autoplaySpeed={5000} silideToShow={1} slideToScroll={1} infinite={true} dots={true} arrows={false} autoplay>
                        {chartModel.map(element => {
                            return (<Chart params={element}/>);
                        })}
                </Slider>
                </div>
            </div>
        </div>
    )
}
export default Skills;