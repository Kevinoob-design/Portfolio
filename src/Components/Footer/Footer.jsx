//jshint esversion:6 

import React from "react";
import SocialStack from "./footerComponent/footerSocialStack";
import social from "./Model/contactModel.json";

function Footer(){
    return (
        <div className="text-center h-48">
            <div className="md:w-1/2 w-auto text-2xl text-center mx-auto underline">CONTACT ME</div>

            <div className="my-2">
                <a href="mailto: HectorM.dev@outlook.com">HectorM.dev@outlook.com</a>
            </div>

            <div>
                {social.map(element => {
                    return (<SocialStack params={element}/>);
                })}
            </div>

            <div className="text-sm pt-5">
                <p><span>&copy;</span> 2020 • Kevinoob-Design all rights reserved</p>
                <p>Develop & Designed by <b>Hector Morales</b></p>
            </div>
        </div>
    )
}
export default Footer;