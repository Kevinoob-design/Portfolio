//jshint esversion:6

import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";

const navigationOptions = [
  {
    text: "Home",
    to: "Header"
  },
  {
    text: "Skills",
    to: "skills"
  },
  {
    text: "Contact",
    to: "Contact"
  }
]

function Nav() {

  const [ menuCollapse, setMenuCollapse ] = useState("");

  const [ animate, setAnimation ] = useState(() => {
    if (window.innerWidth < 768) {
      return "hidden";
    } else {
      return "visible";
    }
  });

  const [ elementHidden, setHidden ] = useState(() => {
    if (window.innerWidth < 768) {
      return "hidden";
    } else {
      return "visible";
    }
  });

  const ShowAnimatedNavOptions = (props) => {
    const handleMenuCollapse = props.handleMenuCollapse
    const text = props.text
    const to = props.to
    const delayTime = props.delayTime + (50 * props.index)
    const durationTime = props.durationTime + (50 * props.index)

    return (
      <li className={ animate + " text-2xl p-5 fast" }
        data-aos="fade-down"
        data-aos-delay={ delayTime }
        data-aos-duration={ durationTime }
        data-aos-mirror={ false }>
        <Scroll activeClass="active" to={ to } spy={ true } smooth={ true } offset={ -75 } duration={ 1000 } onClick={ handleMenuCollapse } className="nav__item cursor-pointer">
          { text }
        </Scroll>
      </li>
    );
  };

  function handleMenuCollapse() {

    if (window.innerWidth < 768) {
      document.getElementById("body").classList.toggle("overflow-hidden");
      document.getElementById("ham").classList.toggle("is-active");

      setMenuCollapse(prev => {
        if (prev === "menuCollapse") {
          setAnimation("fadeOutUp animated faster");
          setTimeout(() => { setHidden("hidden"); }, 500);
          return "menuCollapseUp";
        } else {
          setAnimation("fadeInDown animated fast");
          setHidden("visible");
          return "menuCollapse";
        }
      });
    }
  }

  window.onscroll = () => {
    let last_known_scroll_position = window.scrollY;

    if (last_known_scroll_position > 0) {
      document.getElementById("navBar").classList.add("nav--inset");
      document.getElementById("navBar").classList.remove("ud-nav");

    }
    else {
      document.getElementById("navBar").classList.remove("nav--inset");
      document.getElementById("navBar").classList.add("ud-nav");
    }
  }

  return (
    <div className="fixed w-full z-50 h-auto" data-aos="fade-down" data-aos-delay="3000" data-aos-duration="2000" data-aos-mirror={ false }>
      <nav id="navBar" className={ "text-white ud-nav top-0 right-0 p-1 md:h-auto z-50 " + menuCollapse }>
        <div className="inline-block md:hidden pt-4">
          <button
            id="ham"
            onClick={ handleMenuCollapse }
            className="border-gray-900 focus:outline-none ml-2 block hamburger hamburger--collapse-r">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <ul className={ elementHidden + " md:flex w-screen md:w-auto justify-center" }>

          { navigationOptions.map((element, i) => {
            return <ShowAnimatedNavOptions
              handleMenuCollapse={ handleMenuCollapse }
              text={ element.text }
              to={ element.to }
              delayTime={ 14000 }
              durationTime={ 1500 }
              data-aos-offset={ 200 }
              index={ i } />;
          }) }

          {/* <li className={ animate + " text-2xl p-5 fast" }>
            <Scroll activeClass="active" to="Header" spy={ true } smooth={ true } offset={ -75 } duration={ 1000 } onClick={ handleMenuCollapse } className="nav__item cursor-pointer">
              Home
            </Scroll>
          </li>
          <li className={animate + " text-2xl p-5 fast"}>
            <Scroll activeClass="active" to="about" spy={true} smooth={true} offset={-55} duration={1000} onClick={handleMenuCollapse} className="nav__item cursor-pointer">
              About
            </Scroll>
          </li>
          <li className={ animate + " text-2xl p-5 fast" }>
            <Scroll activeClass="active" to="skills" spy={ true } smooth={ true } offset={ -85 } duration={ 1000 } onClick={ handleMenuCollapse } className="nav__item cursor-pointer">
              Skills
            </Scroll>
          </li>
          <li className={animate + " text-2xl p-5 fast"}>
            <Scroll activeClass="active" to="work" spy={true} smooth={true} offset={-85} duration={1000} onClick={handleMenuCollapse} className="nav__item cursor-pointer">
              Work
            </Scroll>
          </li>
          <li className={animate + " text-2xl p-5 fast"}>
            <Scroll activeClass="active" to="PerpExp" spy={true} smooth={true} offset={-85} duration={1000} onClick={handleMenuCollapse} className="nav__item cursor-pointer">
              Experience
            </Scroll>
          </li>
          <li className={ animate + " text-2xl p-5 fast" }>
            <Scroll activeClass="active" to="Contact" spy={ true } smooth={ true } offset={ -85 } duration={ 1000 } onClick={ handleMenuCollapse } className="nav__item cursor-pointer">
              Contact
            </Scroll>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
