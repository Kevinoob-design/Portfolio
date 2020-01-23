import React from "react";
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { GoBrowser } from "react-icons/go";

const ProjectComponent = (props) => {
    return (
        <div className="rounded shadow-2xl items-center align-top my-5 p-3 lg:w-1/3 w-auto appShow flex-grow mx-5" data-aos="fade-right" data-aos-duration="600">
            <div className="w-full text-center md:text-left h-full lg:mb-16 relative">
                <h1 className="text-4xl mb-1 underline">{props.params.title}</h1>
                <p>{props.params.description}</p>

                <div className="lg:absolute bottom-0 w-full">
                    <button className="mt-5 md:mt-10 w-3/4 md:w-1/5 lg:w-1/4  py-1 bg-black border-2 rounded shadow-2xl md:mr-5">
                        <GoBrowser className="text-4xl inline align-top align-middle" />
                        <a className="leading-tight text-left inline-block text-sm align-middle" href={props.params.url}><p><span className="text-xs text-gray-600">Check it on</span><br /> Website</p></a>
                    </button>

                    <button className="mt-2 md:mt-10 w-3/4 md:w-1/5 lg:w-1/4 py-1 bg-black border-2 rounded shadow-2xl md:mr-5">
                        <FaApple className="text-4xl inline align-top align-middle" />
                        <a className="leading-tight text-left inline-block text-sm align-middle" href={props.params.url}><p><span className="text-xs text-gray-600 ">Get it on</span><br/> App Store</p></a>
                    </button>

                    <button className="mt-2 md:mt-10 w-3/4 md:w-1/5 lg:w-1/4 py-1 bg-black border-2 rounded shadow-2xl">
                        <FaGooglePlay className="text-4xl inline align-top align-middle" />
                        <a className="leading-tight text-left inline-block text-sm align-middle" href={props.params.url}><p><span className="text-xs text-gray-600">Get it on</span><br /> Play Store</p></a>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ProjectComponent;