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
        <div className="h-full flex items-center">
            <div className="mx-auto align-middle max-w-lg bg-gray-800 rounded md:p-10 p-5 text-center">
                <h1 className="text-2xl">File a form!</h1>
                <form action="/" method="post">
                    <input autocomplete="off" autocomplete="off" required id="Subject" className="rounded bg-gray-900 shadow block mx-auto my-3 mx-1 p-1" placeholder="Just this subject..." type="text"/>
                    <input autocomplete="off" required className="rounded bg-gray-900 shadow my-3 mx-1 p-1 md:w-auto w-1/2" placeholder="Josh" type="text"/>
                    <input autocomplete="off" required className="rounded bg-gray-900 shadow my-3 mx-1 p-1 md:w-auto w-1/2" placeholder="Nichols" type="text" />
                    <input autocomplete="off" required className="rounded bg-gray-900 shadow my-3 mx-1 p-1 block mx-auto w-2/3" placeholder="email@examble.com" type="email" /> 
                    <input type="checkbox" name="Aditional" id="chekInfo"/>
                    <select className="rounded  bg-gray-900 shadow my-3 mx-1 p-1 " disabled="">
                        <option value="Tel">Telephone</option>
                        <option value="Tel">Cellphone</option>
                        <option value="Tel">Email</option>
                    </select>
                    <input autocomplete="off" required className="rounded bg-gray-900 shadow my-3 mx-1 p-1 w-auto" disabled="disabled" placeholder="Tell, Cell, Email" type="email" />
                    <textarea placeholder="The reason why i'm contacting you..." required className="rounded bg-gray-900 shadow my-3 mx-1 p-1 w-full resize-none mx-auto" resize="none" rows="10"></textarea>
                    <button className="w-1/3 p-2 bg-yellow-900 shadow mx-5" onClick={cancelForm}>Cancel</button>
                    <button className="w-1/3 p-2 bg-blue-800 shadow mx-5" onClick={submitForm}>Submit</button>
                </form>
            </div>
        </div>
     );
}
export default withRouter(Form);