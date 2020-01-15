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
            <div className="pb-5 md:max-w-6xl mx-auto">
                <div className="md:w-1/2 w-auto text-3xl text-center border-4 mx-auto">PERSONAL EXPERIENCE</div>

                <div className="mb-5">
                    <Slider autoplaySpeed={5000} silideToShow={1} slideToScroll={1} infinite={true} dots={true} arrows={false} autoplay>
                        {perExpModel.map(element => {
                            return (<PerExpCard params={element}/>);
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default PerExp;