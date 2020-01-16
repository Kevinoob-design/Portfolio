//jshint esversion:6 

import React from "react";
import PerExpCard from "./BodyComponents/PerExpCardComponent";
import perExpModel from "./Model/PerExp.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PerExp(){
    return (
        <div id="PerpExp">
            <div className="pb-5">
                <div className="md:w-1/2 w-auto text-3xl text-center shadow-xl rounded mx-auto"><b>PERSONAL EXPERIENCE</b></div>

                <div className=" shadow-2xl rounded p-5">
                    <div className="mb-5 my-5">
                        <Slider autoplaySpeed={5000} silideToShow={1} slideToScroll={1} infinite={true} dots={true} arrows={false} autoplay>
                            {perExpModel.map(element => {
                                return (<PerExpCard params={element}/>);
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PerExp;