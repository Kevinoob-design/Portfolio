//jshint esversion:6

import React from "react";

function Nav(){
    return (
        <nav className="md:m-5 mb-5 md:sticky top-0 z-50">
        <ul className="md:flex w-screen md:w-auto justify-center">
            <li className="text-2xl bg-gray-800 p-5"><a href="#">Home</a></li>
            <li className="text-2xl bg-gray-800 p-5"><a href="#">About</a></li>
            <li className="text-2xl bg-gray-800 p-5"><a href="#">Work Experience</a></li>
            <li className="text-2xl bg-gray-800 p-5"><a href="#">Personal Experience</a></li>
            <li className="text-2xl bg-gray-800 p-5"><a href="#">Contact</a></li>
        </ul>
    </nav>);
}

export default Nav;