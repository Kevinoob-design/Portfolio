//jshint esversion:6 

import React from "react";
import TestimonialCard from "./BodyComponents/TestimonialCardComponent";
import testimonialModel from "./Model/Testimonials.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials(){

    return(
        <div id="testimonials" className="md:flex mt-5 md:p-10 p-2 items-center testimonialCard" data-aos="fade-right" data-aos-duration="600" data-aos-anchor-placement="top-center">

            <div className="md:w-1/3 text-center testimonialTitle rounded-lg shadow-2xl p-3 border-l-8 border-blue-600" >
                <h1 className="text-6xl font-hairline ">What others are saying</h1>
            </div>

            <div className="md:w-2/3 mb-5 mouseMove">
                <Slider autoplaySpeed={5000} slidesToShow={1} slideToScroll={1} infinite={true} dots={true}arrows={false} autoplay vertical={false}>

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