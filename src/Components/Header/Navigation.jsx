//jshint esversion:6

import React, { useState } from "react";
import ListIcon from '@material-ui/icons/List';

function Nav(){
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

        document.getElementById("body").classList.toggle("overflow-hidden");

        setMenuCollapse(prev => {
            if (prev === "menuCollapse") {     
                setAnimation("fadeOutUp animated");
                setTimeout(() => { setHidden("hidden"); }, 500);
                return "menuCollapseUp";
            } else {
                setAnimation("fadeInDown animated");
                setHidden("visible");
                return "menuCollapse";
            }
        });
    }

    return (
        <nav className={"top-0 p-1 fixed bg-gray-900 md:m-auto w-full md:h-auto md:relative z-50 " + menuCollapse}>

            <div className="inline-block md:hidden">
                <button onClick={handleMenuCollapse} className="border-gray-900 focus:outline-none ml-2 block">
                    <ListIcon fontSize="large" /></button>
            </div>

            <ul className={elementHidden + " md:flex w-screen md:w-auto justify-center"}>
                <li className={animate + " text-2xl p-5"}><a href="#">Home</a></li>
                <li className={animate + " text-2xl p-5"}><a href="#">About</a></li>
                <li className={animate + " text-2xl p-5"}><a href="#">Work Experience</a></li>
                <li className={animate + " text-2xl p-5"}><a href="#">Personal Experience</a></li>
                <li className={animate + " text-2xl p-5"}><a href="#">Contact</a></li>
            </ul>
        </nav>);
}

export default Nav;