//jshint esversion:6  

import React from "react";
// import Presentation from "./Presentation";
import NewPresentation from "./NewPresentation";
import { Link as Scroll } from "react-scroll";
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

function Header(){
    return (
      <div id="Header" className="text-white presentationContainer shadow-2xl p-3 items-center text-center flex flex-col justify-center">
        <NewPresentation />
        <a href="/#testimonials" data-aos="fade-down" data-aos-delay="3000" data-aos-duration="3000" data-aos-anchor-placement="top"> 
          <Scroll activeClass="active" to="testimonials" spy={true} smooth={true} offset={-75} duration={500}><PlayForWorkIcon style={{ fontSize: 50 }} /></Scroll>
        </a>
      </div>
    );
}
export default Header;