//jshint esversion:6

import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import social from "../../../Footer/Model/contactModel.json";
// import SocialStack from "../../../Footer/footerComponent/footerSocialStack";
import * as Icon from "react-icons/io";

// const presentedText = `I'm a recently grad software engineer with passion for building great UI/UX. I'm constantly learning new skills while I work thought my goals. I love photography, dogs, and looking at the stars ✨`

const presentedText1 = `I'm a recently grad software engineer with passion for building great UI/UX.`

const presentedText2 = `I'm constantly learning new skills while I work thought my goals.`

const presentedText3 = `I love photography, dogs, and looking at the stars ✨`

// const presentedText = `I'm a recently grad software engineer.`

function Presentation() {
  let be = [ "web", "mobile" ];

  return (
    <div className="flex headerContainer max-w-6xl w-full">
      <div className="p-5 text-xl text-left">
        <h1
          className="text-4xl md:text-6xl"
          data-aos="fade-in"
          data-aos-delay="1000"
          data-aos-duration="2500"
          data-aos-anchor="#Header"
          data-aos-mirror={ false }
        >
          Hi.
        </h1>
        <h1
          className="text-4xl md:text-6xl"
          data-aos="fade-in"
          data-aos-delay="2000"
          data-aos-duration="2500"
          data-aos-anchor="#Header"
          data-aos-mirror={ false }
        >
          I'm Héctor.
        </h1>
        <div className="mb-5 flex md:max-w-sm">
          <p
            data-aos="fade-right"
            data-aos-delay="2500"
            data-aos-duration="2500"
            data-aos-anchor="#Header"
            data-aos-mirror={ false }
            className="text-4xl"
          >
            A{ " " }
          </p>
          <Slider
            className="text-left md:w-1/3"
            autoplaySpeed={ 5000 }
            waitForAnimate={ true }
            infinite={ true }
            dots={ false }
            arrows={ false }
            autoplay
            pauseOnHover={ false }
            vertical={ true }
            draggable={ false }
            touchMove={ false }
          >
            { be.map((element) => {
              return (
                <p
                  data-aos="fade-in"
                  data-aos-delay="4000"
                  data-aos-duration="2500"
                  data-aos-anchor="#Header"
                  data-aos-mirror={ false }
                  className="text-4xl text-yellow-500 text-center"
                >
                  { element }
                </p>
              );
            }) }
          </Slider>
          <p
            data-aos="fade-left"
            data-aos-delay="3000"
            data-aos-duration="2300"
            data-aos-anchor="#Header"
            data-aos-mirror={ false }
            className="text-4xl"
          >
            developer.
          </p>
        </div>

        <div className="max-w-3xl text-gray-300" style={ { display: "flex", flexWrap: "wrap", textOverflow: "ellipsis" } }>
          { presentedText1.split("").map((element, i) => {
            return <PresentedTextAnimated text={ element } delayTime={ 4000 } durationTime={ 1000 } index={ i } />;
          }) }
        </div>

        <div className="max-w-3xl text-gray-300" style={ { display: "flex", flexWrap: "wrap", textOverflow: "ellipsis" } }>
          { presentedText2.split("").map((element, i) => {
            return <PresentedTextAnimated text={ element } delayTime={ 8000 } durationTime={ 1000 } index={ i } />;
          }) }
        </div>

        <div className="max-w-3xl text-gray-300" style={ { display: "flex", flexWrap: "wrap", textOverflow: "ellipsis" } }>
          { presentedText3.split("").map((element, i) => {
            return <PresentedTextAnimated text={ element } delayTime={ 12000 } durationTime={ 1000 } index={ i } />;
          }) }
        </div>


        <div className="mt-10">
          { social.map((element, i) => {
            return <SocialStack params={ element } delayTime={ 14000 } durationTime={ 1500 } index={ i } />;
          }) }
        </div>
      </div>
    </div>
  );
}

export default Presentation;

const PresentedTextAnimated = (props) => {
  const text = props.text
  const delayTime = props.delayTime + (50 * props.index)
  const durationTime = props.durationTime // + (50 * props.index)

  return props.text === " " ? <p>&nbsp;</p> : (
    <p
      data-aos="fade-up"
      data-aos-delay={ delayTime }
      data-aos-duration={ durationTime }
      data-aos-anchor="#Header"
      data-aos-mirror={ false }>
      { text }
    </p>
  );
};

const SocialStack = (props) => {
  const SocialIcon = Icon[ props.params.icon ];
  const delayTime = props.delayTime + (50 * props.index)
  const durationTime = props.durationTime + (50 * props.index)
  // const index = props.index || 0

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={ delayTime }
      data-aos-duration={ durationTime }
      data-aos-anchor="#Header"
      data-aos-mirror={ false }
      className="inline-block mx-2"
    >
      <a href={ props.params.url }>
        <SocialIcon className="text-2xl" />
      </a>
    </div>
  );
};
