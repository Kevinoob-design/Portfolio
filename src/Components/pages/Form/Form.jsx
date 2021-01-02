//jshint esversion:6

import React, { useState } from "react";
import NumberFormat from 'react-number-format';

const Form = (props) => {

    const [ formStatus, setStatus ] = useState(() => {
        return {
            status: "",
            valueNumber: ""
        };
    });

    function submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus({
                    status: "SUCCESS",
                    valueNumber: ""
                });
            } else {
                setStatus({
                    status: "ERROR",
                    valueNumber: ""
                });
            }
        };
        xhr.send(data);
    }

    return (
        <div data-aos="fade-in" className="px-4 text-base">
            <div className="mx-auto max-w-lg md:shadow-2xl rounded md:p-10 p-1 text-center md:border-t-4 md:border-blue-600">
                <h1 className="text-2xl">Feel free to ask anything.</h1>
                <form className="flex flex-wrap justify-center" onSubmit={ submitForm } action="https://formspree.io/f/xaylopke" method="POST">

                    <input name="Subject" autocomplete="off" required id="Subject" className="rounded bg-gray-800 shadow-2xl w-full flex-grow mx-auto my-3 mx-1 p-1" placeholder="Subject..." type="text" />
                    <input name="FirstName" autocomplete="off" required className="rounded bg-gray-800 shadow-2xl my-3 md:mr-1 p-1 w-full md:w-auto w-1/2 flex-grow" placeholder="Josh" type="text" />
                    <input name="LastName" autocomplete="off" required className="rounded bg-gray-800 shadow-2xl my-3 md:ml-1 w-full p-1 md:w-auto w-1/2 flex-grow" placeholder="Nichols" type="text" />
                    <input name="ContactEmail" autocomplete="off" required className="rounded bg-gray-800 shadow-2xl my-3 p-1 block mx-auto w-2/3 flex-grow" placeholder="email@example.com" type="email" />

                    <NumberFormat value={ formStatus.valueNumber } name="phone" format="(###) ###-####" mask="_" required className="rounded bg-gray-800 shadow-2xl my-3 p-1 w-auto flex-grow" placeholder="(800)-123-4567" type="phone" />

                    {/* <select name="TypeOfPhone" className="rounded bg-gray-800 shadow-2xl my-3 mx-1 p-1 flex-grow">
                        <option value="Cell">Cellphone</option>
                        <option value="Tell">Telephone</option>
                    </select> */}

                    <input name="Country" autocomplete="off" required className="rounded bg-gray-800 shadow-2xl my-3 mx-1 p-1 block mx-auto w-2/3 flex-grow" placeholder="Country" type="text" />

                    <textarea name="Details" placeholder="The reason why i'm contacting you..." required className="rounded bg-gray-800 shadow-2xl my-3 mx-1 p-1 w-full resize-none mx-auto flex-grow" resize="none" rows="10"></textarea>

                    { formStatus.status === "SUCCESS" ? <p>Thanks!</p> : <button className="w-1/3 p-2 bg-blue-800 hover:bg-blue-900 rounded shadow-2xl mx-5">Submit</button> }
                    { formStatus.status === "ERROR" && <p>Ooops! There was an error.</p> }
                </form>
                <p className="text-sm mt-5">This information is meant to get in contact with you ONLY!. I will not use it for advertising nor subscribe you to a newsletter.</p>
            </div>
        </div>
    );
}

export default Form;
