//jshint esversion:6 

import React from "react";

function Presentation(){

    return (
    <div className="flex relative w-full headerContainer mx-auto mt-10 md:mt-2 md:max-w-6xl">
        <div className="absolute bg-black md:w-1/2 w-auto nameBox md:text-4xl text-3xl text-center border-4"><h1>Hector Morales</h1></div>
        <div className="hidden md:block h-full w-1/2 imgHolder"></div>
        <div className="h-full w-full bg-gray-800 p-5 text-2xl">
            <p className="mb-16">Hi, my name is</p>
            <p className="mb-5">I'm a software developer</p>
            <p className="mb-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dicta nulla, dignissimos odio quo qui nisi explicabo maiores fugiat vero sit et tempore, quidem quas iure quae autem veritatis esse?</p>
        </div>
    </div>);
}

export default Presentation;