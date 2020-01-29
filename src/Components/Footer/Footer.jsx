//jshint esversion:6 

import React from "react";
import SocialStack from "./footerComponent/footerSocialStack";
import social from "./Model/contactModel.json";

function Footer() {
    return (
        <div id="footer" className="text-center h-48 items-center mt-5">

            <div>
                {social.map(element => {
                    return (<SocialStack params={element} />);
                })}
            </div>

            <div className="text-sm pt-5">
                <p><span>&copy;</span> 2020 • All rights reserved</p>
                <p>Develop & Designed by <b>Héctor Morales</b></p>
            </div>
        </div>
    )
}
export default Footer;