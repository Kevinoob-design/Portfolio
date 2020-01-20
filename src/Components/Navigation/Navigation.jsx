//jshint esversion:6

import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Link as Scroll, animateScroll } from "react-scroll";

function Nav() {

  const [menuCollapse, setMenuCollapse] = useState("");

  const [animate, setAnimation] = useState(() => {
    if (window.innerWidth < 768) {
      return "hidden";
    } else {
      return "visible";
    }
  });

  const [elementHidden, setHidden] = useState(() => {
    if (window.innerWidth < 768) {
      return "hidden";
    } else {
      return "visible";
    }
  });

  function handleMenuCollapse() {

    if (window.innerWidth < 768){
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
    <div data-aos="fade-down" data-aos-delay="3000" data-aos-duration="3000"> 
      <nav id="navBar" className={"text-white ud-nav top-0 right-0 p-1 fixed w-full md:h-auto z-50 " + menuCollapse}>
        <div className="inline-block md:hidden pt-4">
          <button
            id="ham"
            onClick={handleMenuCollapse}
            className="border-gray-900 focus:outline-none ml-2 block hamburger hamburger--collapse-r">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <ul 
        className={elementHidden + " md:flex w-screen md:w-auto justify-center"}>
          <li className={animate + " text-2xl p-5 fast"}>
            <Link onClick={handleMenuCollapse} className="nav__item" to="/">
              Home
            </Link>
          </li>
          <li className={animate + " text-2xl p-5 fast"}>
            <a className="nav__item" href="/#about">
              <Scroll onClick={handleMenuCollapse} activeClass="active" to="about" spy={true} smooth={true} offset={-75} duration={500}>About</Scroll>
            </a>
          </li>
          <li className={animate + " text-2xl p-5 fast"}>
            <a onClick={handleMenuCollapse} className="nav__item" href="/#work">
              <Scroll onClick={handleMenuCollapse} activeClass="active" to="work" spy={true} smooth={true} offset={-85} duration={500}>Work</Scroll>
            </a>
          </li>
          <li className={animate + " text-2xl p-5 fast"}>
            <a onClick={handleMenuCollapse} className="nav__item" href="/#PerpExp">
              <Scroll onClick={handleMenuCollapse} activeClass="active" to="PerpExp" spy={true} smooth={true} offset={-85} duration={500}>Experience</Scroll>
            </a>
          </li>
          <li className={animate + " text-2xl p-5 fast"}>
            <Link onClick={handleMenuCollapse} className="nav__item" to="/Form">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default withRouter(Nav);