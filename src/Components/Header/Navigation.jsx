//jshint esversion:6

import React from "react";

function Nav(){
    return (
    <nav>
        <ul className="flex justify-center text-white">
            <li className="bg-gray-800 inline p-5"><a href="#">Home</a></li>
            <li className="bg-gray-800 inline p-5"><a href="#">About</a></li>
            <li className="bg-gray-800 inline p-5"><a href="#">Work Experience</a></li>
            <li className="bg-gray-800 inline p-5"><a href="#">Personal Experience</a></li>
            <li className="bg-gray-800 inline p-5"><a href="#">Contact</a></li>
        </ul>
    </nav>);
}

export default Nav;