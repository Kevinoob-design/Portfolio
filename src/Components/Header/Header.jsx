//jshint esversion:6  

import React from "react";
import Nav from "./Navigation";
import Presentation from "./Presentation";
import NewPresentation from "./NewPresentation";

function Header(){
    return (
      <div className="pt-1">
        <Nav />
        <NewPresentation />
      </div>
    );
}
export default Header;