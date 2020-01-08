//jshint esversion:6 

import React from "react";
import TestimonialCard from "./BodyComponents/TestimonialCardComponent";
import testimonialModel from "./Model/Testimonials.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials(){

    return(
        <div className="md:flex mt-5 bg-gray-800 md:max-w-6xl mx-auto md:p-10 p-2 items-center testimonialCard">
            <div className="md:w-1/3 text-center">
                <h1 className="text-6xl font-hairline ">What others are saying</h1>
            </div>

            <div className="md:w-2/3 mb-5">
                <Slider autoplaySpeed={5000} silideToShow={1} slideToScroll={1} infinite={true} dots={true}arrows={false} autoplay>

                    {testimonialModel.map(element => {
                        return(
                            <TestimonialCard params={element}/>
                        );
                    })}
                </Slider>
            </div>
        </div>
    )
}
export default Testimonials;