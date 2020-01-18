//jshint esversion:6 

import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Presentation(){

    let be = ["developer", "student"];

    return (
        <div className="flex headerContainer items-center max-w-6xl">
          <div className="p-5 text-2xl">
            <p data-aos="fade-in" data-aos-duration="1000" className="">Hi</p>
            <p data-aos="fade-in" data-aos-delay="1000" data-aos-duration="1500">My name is</p>
            <h1 data-aos="fade-left" data-aos-delay="1500" data-aos-duration="2000" className="text-4xl md:text-6xl">Hector Morales</h1>
            <div className="mb-5 flex max-w-sm mx-auto items-center">
              <p data-aos="fade-right" data-aos-delay="2000" data-aos-duration="2000" className="w-1/2 text-right mr-1">I'm a </p>
              <Slider 
                className="text-left w-2/3"
                autoplaySpeed={3000}
                infinite={true}
                dots={false}
                arrows={false}
                autoplay
                vertical={true}
                draggable={false}
                touchMove={false}>
                {be.map(element => {
                  return <p data-aos="fade-up" data-aos-delay="3000" data-aos-duration="3000" className="text-yellow-500">{element}</p>;
                })}
              </Slider>
            </div>
            <p data-aos="fade-up" data-aos-delay="3000" data-aos-duration="3000">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta
              nulla, dignissimos odio quo qui nisi explicabo maiores fugiat vero
              sit et tempore, quidem quas iure quae autem veritatis esse?
            </p>
          </div>
        </div>
    );
}

export default Presentation;