//jshint esversion:6 

import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Presentation(){

    let be = ["developer", "student"];

    return (
      <div className="flex w-full headerContainer mx-auto mt-10 md:mt-2 md:max-w-6xl items-center">
        <div className="p-5 text-2xl text-center">
          <p className="">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl">Hector Morales</h1>
          <div className="mb-5 flex max-w-sm mx-auto items-center">
            <p className="w-1/2 text-right mr-2">I'm a </p>
            <Slider
              className="text-left w-2/3"
              autoplaySpeed={3000}
              silideToShow={1}
              slideToScroll={1}
              infinite={true}
              dots={false}
              arrows={false}
              autoplay
              vertical={true}
              focusOnSelect={false}
              draggable={false}
              touchMove={false}
            >
              {be.map(element => {
                return <p>{element}</p>;
              })}
            </Slider>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta
            nulla, dignissimos odio quo qui nisi explicabo maiores fugiat vero
            sit et tempore, quidem quas iure quae autem veritatis esse?
          </p>
        </div>
      </div>
    );
}

export default Presentation;