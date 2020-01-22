import React from "react";

const NotFound = (props) => {

    function goBack(){
        props.history.push("/");
    }

    return (
        <div className="h-screen md:p-56 py-24 px-5 NotFound">
            <div>
                <p  className="text-4xl md:text-6xl underline ">404</p>
                <h1 className="text-4xl md:text-6xl">This page was not found —</h1>
            </div>
            <div>
                <button className="px-4 py-2 hover:bg-teal-600 border-2 rounded shadow-2xl text-xs md:text-md" onClick={goBack}>Go Back</button>
            </div>
        </div>
     );
}
export default NotFound;