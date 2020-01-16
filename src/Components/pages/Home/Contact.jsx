import React from "react";
import { Link } from "react-router-dom";
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';

const Contact = () => {
    return ( 
        <div id="Contact" className="text-center items-center mt-5">
            <a href="#"><KeyboardArrowUpRoundedIcon/></a>
            <div className="md:w-1/2 w-auto text-2xl text-center mx-auto underline">CONTACT ME</div>

            <div className="my-2">
                <a href="mailto: HectorM.dev@outlook.com"> HectorM.dev@outlook.com </a>
            </div>

            <div className="my-2">
                <Link to="/Form"> Submit a form</Link>
            </div>
        </div>
     );
}
export default Contact;