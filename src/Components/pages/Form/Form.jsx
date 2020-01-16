//jshint esversion:6

import React from "react";
import { withRouter } from "react-router-dom";

const Form = (props) => {

    function cancelForm() {
        props.history.push("/");
    }
    function submitForm() {
        // props.history.push("/");
    }

    return ( 
        <div className="pt-32">
            <div className="mx-auto max-w-lg bg-gray-800 rounded md:p-10 p-5 text-center">
                <h1 className="text-2xl">File a form!</h1>
                <form action="/api/contact" method="post">
                    <input name="Subject" autocomplete="off" required id="Subject" className="rounded bg-gray-900 shadow block mx-auto my-3 mx-1 p-1" placeholder="Just this subject..." type="text"/>
                    <input name="Name" autocomplete="off" required className="rounded bg-gray-900 shadow my-3 mx-1 p-1 md:w-auto w-1/2" placeholder="Josh" type="text"/>
                    <input name="LastName" autocomplete="off" required className="rounded bg-gray-900 shadow my-3 mx-1 p-1 md:w-auto w-1/2" placeholder="Nichols" type="text" />
                    <input name="ContactEmail" autocomplete="off" required className="rounded bg-gray-900 shadow my-3 mx-1 p-1 block mx-auto w-2/3" placeholder="email@examble.com" type="email" /> 
                    <input type="checkbox" name="Aditional" id="chekInfo"/>
                    <select name="AditionanContactInfo" className="rounded  bg-gray-900 shadow my-3 mx-1 p-1 " disabled="">
                        <option value="Tell">Telephone</option>
                        <option value="Cell">Cellphone</option>
                        <option value="Email">Email</option>
                    </select>
                    <input autocomplete="off" required className="rounded bg-gray-900 shadow my-3 mx-1 p-1 w-auto" disabled="" placeholder="Tell, Cell, Email" type="email" />
                    <textarea name="Details" placeholder="The reason why i'm contacting you..." required className="rounded bg-gray-900 shadow my-3 mx-1 p-1 w-full resize-none mx-auto" resize="none" rows="10"></textarea>
                    <button className="w-1/3 p-2 bg-yellow-900 shadow mx-5" onClick={cancelForm}>Cancel</button>
                    <button className="w-1/3 p-2 bg-blue-800 shadow mx-5" onClick={submitForm}>Submit</button>
                </form>
            </div>
        </div>
     );
}
export default withRouter(Form);