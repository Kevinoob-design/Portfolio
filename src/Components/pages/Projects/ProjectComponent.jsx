import React from "react";
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { GoBrowser } from "react-icons/go";

const ProjectComponent = (props) => {
    return (
        <div className="md:border-l-8 border-blue-600 rounded shadow-2xl flex flex-wrap items-center align-top bg-gray-900 my-12 py-8 " data-aos="fade-right" data-aos-duration="600">
            <div className="w-full md:w-1/3 mr-5 h-full rounded">
                <img src={props.params.img.url} alt="alt" />
            </div>
            <div className="w-full md:w-1/2 p-3 text-center md:text-left">
                <h1 className="text-4xl mb-12 underline">{props.params.title}</h1>
                <p>{props.params.description}</p>

                <button className="mt-5 md:mt-10 w-3/4 md:w-1/4 py-2 hover:bg-blue-600 border-2 rounded shadow-2xl">
                    <GoBrowser className="text-4xl inline align-top mx-1" />
                    <a className="leading-none text-left w-1/2 inline-block" href={props.params.url}><p><span className="text-xs text-gray-600">Check it on</span><br /> Website</p></a>
                </button>

                <button className="mt-2 md:mt-10 w-3/4 md:w-1/4 py-2 hover:bg-teal-600 border-2 rounded shadow-2xl md:mx-5">
                    <FaApple className="text-4xl inline align-top mx-1" />
                    <a className="leading-none text-left w-1/2 inline-block" href={props.params.url}><p><span className="text-xs text-gray-600 ">Get it on</span><br/> App Store</p></a>
                </button>

                <button className="mt-2 md:mt-10 w-3/4 md:w-1/4 py-2 hover:bg-yellow-600 border-2 rounded shadow-2xl">
                    <FaGooglePlay className="text-4xl inline align-top mx-1" />
                    <a className="leading-none text-left w-1/2 inline-block" href={props.params.url}><p><span className="text-xs text-gray-600">Get it on</span><br /> Play Store</p></a>
                </button>
            </div>
        </div>
    );
}
export default ProjectComponent;