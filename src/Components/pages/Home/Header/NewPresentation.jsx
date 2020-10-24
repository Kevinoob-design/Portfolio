//jshint esversion:6

import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import social from "../../../Footer/Model/contactModel.json";
// import SocialStack from "../../../Footer/footerComponent/footerSocialStack";
import * as Icon from "react-icons/io";

function Presentation() {
  let be = ["web", "mobile"];

  return (
    <div className="flex headerContainer max-w-6xl w-full">
      <div className="p-5 text-xl text-left">
        <h1
          className="text-4xl md:text-6xl"
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-anchor="#Header"
          data-aos-mirror={false}
        >
          Hi.
        </h1>
        <h1
          className="text-4xl md:text-6xl"
          data-aos="fade-left"
          data-aos-delay="1500"
          data-aos-duration="2000"
          data-aos-anchor="#Header"
          data-aos-mirror={false}
        >
          I'm Héctor.
        </h1>
        <div className="mb-5 flex md:max-w-sm">
          <p
            data-aos="fade-right"
            data-aos-delay="2000"
            data-aos-duration="2000"
            data-aos-anchor="#Header"
            data-aos-mirror={false}
            className="text-4xl"
          >
            A{" "}
          </p>
          <Slider
            className="text-left md:w-1/3"
            autoplaySpeed={5000}
            waitForAnimate={true}
            infinite={true}
            dots={false}
            arrows={false}
            autoplay
            pauseOnHover={false}
            vertical={true}
            draggable={false}
            touchMove={false}
          >
            {be.map((element) => {
              return (
                <p
                  data-aos="fade-in"
                  data-aos-delay="3000"
                  data-aos-duration="3000"
                  data-aos-anchor="#Header"
                  data-aos-mirror={false}
                  className="text-4xl text-yellow-500 text-center"
                >
                  {element}
                </p>
              );
            })}
          </Slider>
          <p
            data-aos="fade-left"
            data-aos-delay="2000"
            data-aos-duration="2000"
            data-aos-anchor="#Header"
            data-aos-mirror={false}
            className="text-4xl"
          >
            developer.
          </p>
        </div>
        <div className="max-w-2xl text-gray-300">
          <p
            data-aos="fade-up"
            data-aos-delay="3000"
            data-aos-duration="3000"
            data-aos-anchor="#Header"
            data-aos-mirror={false}
          >
            I'm a recently grad software engineer with passion for building
            great UI/UX. I'm constantly learning new skills while i work thought
            my goals. I love watching movies, dogs and looking at the stars{" "}
            <span role="img" aria-labelledby="stars">
              ✨
            </span>
          </p>
        </div>
        <div className="mt-10">
          {social.map((element) => {
            return <SocialStack params={element} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Presentation;

const SocialStack = (props) => {
  let SocialIcon = Icon[props.params.icon];

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="3000"
      data-aos-duration="3000"
      data-aos-anchor="#Header"
      data-aos-mirror={false}
      className="inline-block mx-2"
    >
      <a href={props.params.url}>
        <SocialIcon className="text-2xl" />
      </a>
    </div>
  );
};
