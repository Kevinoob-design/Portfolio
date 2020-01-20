import React from "react";
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const ProjectComponent = (props) => {
    return (
        <div className="md:border-l-8 border-blue-600 rounded shadow-2xl flex flex-wrap items-center align-top bg-gray-900 my-12 py-8" data-aos="fade-right" data-aos-duration="600">
            <div className="w-full md:w-1/3 mr-5 h-full rounded">
                <img src={props.params.img.url} alt="alt" />
            </div>
            <div className="w-full md:w-1/2 p-3">
                <h1 className="text-4xl mb-12 underline">{props.params.title}</h1>
                <p>{props.params.description}</p>

                <button className="mt-10 md:w-1/4 py-2 hover:bg-blue-600 border-2 rounded shadow-2xl">
                    <a href={props.params.url}>Go to Website</a>
                </button>
                <button className="mt-10 md:w-1/4 py-2 hover:bg-teal-600 border-2 rounded shadow-2xl mx-5">
                    <FaApple className="text-2xl inline align-top mx-1" />
                    <a href={props.params.url}>App Store</a>
                </button>

                <button className="mt-10 md:w-1/4 py-2 hover:bg-yellow-600 border-2 rounded shadow-2xl">
                    <FaGooglePlay className="text-2xl inline-block align-middle mx-1" />
                    <a href={props.params.url}>Play Store</a>
                </button>
            </div>
        </div>
    );
}
export default ProjectComponent;