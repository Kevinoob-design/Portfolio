//jshint esversion:6

import React, { useState } from "react";

function Nav(){
    const [menuCollapse, setMenuCollapse] = useState("");

    // const [hamburger, setHamburgerCollapse] = (" ");

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
    return (
        <nav className={"top-0 p-1 fixed bg-gray-900 md:m-auto w-full md:h-auto md:relative z-50 " + menuCollapse}>
            
            <div className="inline-block md:hidden pt-4">
                <button id="ham" onClick={handleMenuCollapse} className="border-gray-900 focus:outline-none ml-2 block hamburger hamburger--collapse-r">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>

            <ul className={elementHidden + " md:flex w-screen md:w-auto justify-center"}>
                <li className={animate + " text-2xl p-5 fast"}><a href="#">Home</a></li>
                <li className={animate + " text-2xl p-5 fast"}><a href="#">About</a></li>
                <li className={animate + " text-2xl p-5 fast"}><a href="#">Work</a></li>
                <li className={animate + " text-2xl p-5 fast"}><a href="#">Experience</a></li>
                <li className={animate + " text-2xl p-5 fast"}><a href="#">Contact</a></li>
            </ul>
        </nav>);
}
export default Nav;