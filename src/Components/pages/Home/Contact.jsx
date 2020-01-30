import React from "react";
import { Link  as Scroll } from "react-scroll";
import { MdKeyboardArrowUp } from "react-icons/md";
import Form from "../Form/Form";

const Contact = () => {
    return ( 
        <div id="Contact" className="text-center items-center mt-5">
            <Scroll className="justify-center flex" activeClass="active" to="Header" spy={true} smooth={true} offset={-75} duration={1000}>
                <MdKeyboardArrowUp className="text-xl cursor-pointer" />
            </Scroll>

            <div className="md:w-1/2 w-auto text-2xl text-center mx-auto underline">CONTACT ME</div>

            <div className="my-2">
                <a href="mailto: HectorM.dev@outlook.com"> HectorM.dev@outlook.com </a>
            </div>

            <div className="my-2">
                <Form/>
            </div>
        </div>
     );
}
export default Contact;