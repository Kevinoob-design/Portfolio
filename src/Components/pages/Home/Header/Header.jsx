//jshint esversion:6  

import React from "react";
// import Presentation from "./Presentation";
import NewPresentation from "./NewPresentation";
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

function Header(){
    return (
      <div className="text-white presentationContainer shadow-2xl p-3 items-center text-center flex flex-col justify-center">
        <NewPresentation />
        <a href="#testimonials" data-aos="fade-down" data-aos-delay="3000" data-aos-duration="3000" data-aos-anchor-placement="top"><PlayForWorkIcon style={{ fontSize: 50 }} /></a>
      </div>
    );
}
export default Header;