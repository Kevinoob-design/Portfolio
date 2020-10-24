//jshint esversion:6  

import React from "react";
// import Presentation from "./Presentation";
import NewPresentation from "./NewPresentation";
import { Link as Scroll } from "react-scroll";
import { MdPlayForWork} from "react-icons/md";

function Header(){
    return (
    <div id="Header" className="text-white presentationContainer p-3 items-center text-center flex flex-col justify-center">
        <NewPresentation />
        {/* <a href="/#testimonials" data-aos="fade-down" data-aos-delay="3000" data-aos-duration="3000" data-aos-anchor="#Header" data-aos-mirror={false}> 
          <Scroll activeClass="active" to="about" spy={true} smooth={true} offset={-55} duration={1000}>
            <MdPlayForWork style={{ fontSize: 50 }} />
          </Scroll>
        </a> */}
      </div>
    );
}
export default Header;