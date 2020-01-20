//jshint esversion:6

import React from "react";
import { withRouter } from "react-router-dom";
import NumberFormat from 'react-number-format';

const Form = (props) => {

    function cancelForm() {
        props.history.push("/");
    }
    function submitForm() {
        // props.history.push("/");
    }

    return ( 
        <div className="pt-32 px-4">
            <div className="mx-auto max-w-lg shadow-2xl rounded md:p-10 p-5 text-center border-t-4 border-blue-600">
                <h1 className="text-2xl">Feel free to ask anything.</h1>
                <form action="/api/contact" method="post">

                    <input name="Subject" autocomplete="off" required id="Subject" className="rounded bg-gray-800 shadow-2xl block mx-auto my-3 mx-1 p-1" placeholder="Just a subject..." type="text"/>
                    <input name="Name" autocomplete="off" required className="rounded bg-gray-800 shadow-2xl my-3 mx-1 p-1 md:w-auto w-1/2" placeholder="Josh" type="text"/>
                    <input name="LastName" autocomplete="off" required className="rounded bg-gray-800 shadow-2xl my-3 mx-1 p-1 md:w-auto w-1/2" placeholder="Nichols" type="text" />
                    <input name="ContactEmail" autocomplete="off" required className="rounded bg-gray-800 shadow-2xl my-3 mx-1 p-1 block mx-auto w-2/3" placeholder="email@examble.com" type="email" /> 

                    <select name="AditionanContactInfo" className="rounded  bg-gray-800 shadow-2xl my-3 mx-1 p-1 ">
                        <option value="Tell">Telephone</option>
                        <option value="Cell">Cellphone</option>
                    </select>

                    <NumberFormat name="phone" format="(###) ###-####" mask="_" required className="rounded bg-gray-800 shadow-2xl my-3 mx-1 p-1 w-auto" placeholder="(800)-123-4567" type="phone" />
                    <textarea name="Details" placeholder="The reason why i'm contacting you..." required className="rounded bg-gray-800 shadow-2xl my-3 mx-1 p-1 w-full resize-none mx-auto" resize="none" rows="10"></textarea>
                    <button className="w-1/3 p-2 bg-yellow-800 hover:bg-yellow-900 border-2 shadow-2xl rounded mx-5" onClick={cancelForm}>Cancel</button>
                    <button className="w-1/3 p-2 bg-blue-800 hover:bg-blue-900 rounded border-2 shadow-2xl mx-5" onClick={submitForm}>Submit</button>
                </form>
                <p className="text-sm mt-5">This information is meant to get in contact with you ONLY!. I will not use it for advertising nor subscribe you to a newslatter.</p>
            </div>
        </div>
     );
}
export default withRouter(Form);