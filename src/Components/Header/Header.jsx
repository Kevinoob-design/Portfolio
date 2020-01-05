//jshint esversion:6  

import React from "react";
import Nav from "./Navigation";
import Presentation from "./Presentation";

function Header(){
    return (<div className="pt-1"><Nav /><Presentation/></div>);
}

export default Header;